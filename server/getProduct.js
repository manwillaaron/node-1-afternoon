const products = require('../products.json')

const getProduct = (req, res) => {
   const product = products.find(val => val.id === parseInt(req.params.id))
    if(!product){
        return res.status(500).send('product not in list')
    } 
    res.status(200).send(product)
}
module.exports = getProduct