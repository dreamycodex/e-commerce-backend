const express = require('express');
const cors = require('cors');

const products = require('./db/products');

//creating a server

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Express Application!")
})

// getting all products 

app.get('/api/products', (req, res) => {
    res.status(200).json(products);
})

app.listen(3000, () => {
    console.log("server is up and running")
});


