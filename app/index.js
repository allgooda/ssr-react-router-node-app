import React from 'react';
import ReactDOM from 'react-dom';
import {BrowseRouter as Router} from 'react-router-dom';
import App from './components/App';

const render = ReactDOM.render;

render((
    <Router>
      <App pokemon={window.__PRELOADED_STATE__}/>
    </Router>),
    document.getElementById('root')
  );