import express from 'express';
import redis from 'redis';
import util from 'util';
import kue from 'kue';

const client = redis.createClient();
client.on('connect', () => {
}).on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
});

async function reserveSeat(number) {
    const setAsync = util.promisify(client.set).bind(client);
    return setAsync('available_seats', number);
}

reserveSeat(50);
let reservationEnabled = true;
const queue = kue.createQueue();

async function getCurrentAvailableSeats() {
    const getAsync = util.promisify(client.get).bind(client);
    return getAsync('available_seats');
}

const app = express();

app.get('/available_seats', async (req, res) => {
    res.json({numberOfAvailableSeats: await getCurrentAvailableSeats()}).end();
});

app.get('/reserve_seat', (req, res) => {
    if (reservationEnabled === false) {
        res.json({status: 'Reservation are blocked'}).end();
    } else {
        const reserveS = queue.create('reserve_seat').save((err) => {
            if (!err) {
                res.json({status: 'Reservation in process'});
            } else {
                res.json({status: 'Reservation failed'}).end();
            }
        });
        reserveS.on('complete', () => {
            console.log(`Seat reservation job ${reserveS.id} completed`);
        }).on('failed', () => {
            console.log(`Seat reservation job ${reserveS.id} failed: ERROR_MESSAGE`);
        });
    }
});

app.get('/process', (req, res) => {
    res.json({status: 'Queue processing'}).end();
    queue.process('reserve_seat', async (job, done) => {
        const count = await getCurrentAvailableSeats();
        if (count === 0) {
            reservationEnabled = false;
            done();
        } else if (count > 0) {
            reserveSeat(count - 1);
            done();
        } else {
            done(new Error('Not enough seats available'));
        }
    });
});

app.listen(1245);
