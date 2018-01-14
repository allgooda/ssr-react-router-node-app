import Product from '../models/product'

const Products = {
  create: (req, res) => {
    console.log(req);
    var newProduct = req;
    console.log('CONTROLLER');
    console.log(newProduct);
    Product.create(newProduct, function(err, product) {
      console.log(product);
      console.log('HELLOOOO');
      if(err) {
        console.log('error?')
        res.send(err);
      }
      return product;

    })
  }
}

export default Products;
