import redis from 'redis';

const client = redis.createClient();

client.on('error', (err) => console.log(`Redis client not connected to the server: ${err}`));

client.on('connect', () => {
    console.log('Redis client connected to the server');
}).on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
});

const keys = ['Portland', 'Seattle', 'New York', 'Bogota', 'Cali', 'Paris'];
const values = {
    Portland: '50', Seattle: '80', 'New York': '20', Bogota: '20', Cali: '40', Paris: '2',
};

keys.forEach((data) => client.hset('HolbertonSchools', data, values[data], redis.print()));

client.hgetall('HolbertonSchools', (err, value) => {
    if (err) {
        console.error('error');
    } else {
        console.log(value);
    }
})
