import React from 'react';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import List from './List'
import Home from './Home'

export default function App(props) {
  const products  = props.products;

  return (
    <div>
      Your React Node app is set up!
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" render={(location) => (<List products={products} location={location} />)} />
      </Switch>
    </div>
  )
};
