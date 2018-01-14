import { renderToString } from 'react-dom/server';
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

import routes from './routes';
import renderFullPage from './renderFullPage'
import getPokemon from '../services/getPokemon';
import App from '../components/App';
import Products from './controllers/products';

export default function router(req, res) {

  const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);
  console.log(match);
  if(!match) {
    res.status(404).send('page not found');
    return;
  }

  return Products.create( { name: 'Couch', description: 'Comfy', type: 'furniture', price: 3000 })
    .then(resp => {
      console.log('WHAT?')
      console.log(resp);
    })
    .catch(err => res.status(404).send(`${err}: Oh no! cannot find`));

  // return getPokemon.withAbility('telepathy')
  //   .then(resp => {
  //     const pokemon = { list: resp.data.pokemon };

  //     const context = {}

  //     const html = renderToString(
  //       <StaticRouter context={context} location={req.url} >
  //         <App pokemon={pokemon} />
  //       </StaticRouter>
  //     )

  //     res.status(200).send(renderFullPage(html, pokemon));

  //   })
  //   .catch(err => res.status(404).send(`${err}: Oh no! cannot find`));
}
