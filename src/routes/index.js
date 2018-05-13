import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './assets/css/index.css';

import { HashRouter, Route, Switch } from "react-router-dom";

import App from '.././App';
import React from 'react';

export default() => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </HashRouter>
);
