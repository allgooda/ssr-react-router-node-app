import React from 'react';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import List from './List'
import Home from './Home'
import ProductCreate from './ProductCreate'

export default function App(props) {
  console.log(props);
  const products  = props.products;
  console.log(products);

  return (
    <div>
      Your React Node app is set up!
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" render={(location) => (<List products={products} location={location} />)} />
        <Route path="/create" exact component={ProductCreate} />
      </Switch>
    </div>
  )
};
