import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

render((
    <Router>
        <App products={window.__PRELOADED_STATE__}/>
    </Router>),
    document.getElementById('root')
);
