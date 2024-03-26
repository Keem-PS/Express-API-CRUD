const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const products = [];

app.post('/products', (req, res) => {
    products.push(req.body);
    res.json(products);
})

app.get('/products', (req, res) => {
    res.json(products);
})

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(p => p.id === id);
    res.json(product);
});

app.put('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = req.body;
    const index = products.findIndex(p => p.id === id);
    products[index] = product;
    res.json(product);
})


app.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex(p => p.id === id);
    products.splice(index, 1);
    res.json(products);
})

app.listen(3000, () => console.log('Server ready'));