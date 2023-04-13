import express from 'express';
import redis from 'redis';
import util from 'util';

const client = redis.createClient();
client.on('connect', () => {
}).on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
});

const list = [
    {
        itemId: '1',
        itemName: 'Suitcase 250',
        price: '50',
        initialAvailableQuantity: '4',
    },
    {
        itemId: '2',
        itemName: 'Suitcase 450',
        price: '100',
        initialAvailableQuantity: '10',
    },
    {
        itemId: '3',
        itemName: 'Suitcase 650',
        price: '350',
        initialAvailableQuantity: '2',
    },
    {
        itemId: '4',
        itemName: 'Suitcase 1050',
        price: '550',
        initialAvailableQuantity: '5',
    },
];

function getItemById(itemId) {
    let main;
    list.forEach((item) => {
        if (item.itemId === itemId) {
            main = item;
        }
    });
    return main;
}

function reserveStockById(itemId, stock) {
    client.hset('item', itemId, stock);
}

async function getCurrentReservedStockById(itemId) {
    const getAsync = util.promisify(client.hget).bind(client);
    return getAsync('item', itemId);
}

const app = express();

app.get('/list_products', (req, res) => {
    res.json(list).end();
});

app.get('/list_products/:itemId', async (req, res) => {
    const field = req.params.itemId;
    const Product = getItemById(field);
    const checkInventory = await getCurrentReservedStockById(field);
    if (Product) {
        Product.currentQuantity = checkInventory;
        res.json(Product).end();
    } else {
        res.json({status: 'Product not found'}).end();
    }
});

app.get('/reserve_product/:itemId', async (req, res) => {
    const field = req.params.itemId;
    const Product = getItemById(field);
    if (Product) {
        if (Product.initialAvailableQuantity > 0) {
            reserveStockById(field, Product.initialAvailableQuantity);
            Product.initialAvailableQuantity -= 1;
            res.json({status: 'Reservation confirmed', itemId: field}).end();
        } else {
            res.json({status: 'Not enough stock available', itemId: field}).end();
        }
    } else {
        res.json({status: 'Product not found'}).end();
    }
});

app.listen(1245);
