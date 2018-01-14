import Product from '../models/product'

const Products = {
  create: (req, res) => {
    var newProduct = req;
    return Product.create(newProduct, function(err, product) {
      if(err) {
        console.log('error?')
        res.send(err);
      }
      return product;
    })
  },
  index: (req, res) => {
    return Product.find({}, function(error, products) {
      return products;
    });
  }
}

export default Products;
