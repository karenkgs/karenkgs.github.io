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
