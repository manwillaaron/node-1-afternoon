const express = require('express')
const app = express()
const port = 5000;
const getProducts = require('./getProducts')
const getProduct = require('./getProduct.js')
 
app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});