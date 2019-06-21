const products = require('../products.json');



const getProducts = (req, res) => {
    console.log(req.query.price);
    if(+req.query.price){
    const greaterThanEqualTo = products.filter(val => {
        console.log(val.price >= +req.query.price);
        return val.price >= +req.query.price
    }
    )
    console.log(greaterThanEqualTo);
    return res.status(200).send(greaterThanEqualTo)
}
res.status(200).send(products)
}


module.exports = getProducts