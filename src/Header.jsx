import './assets/css/App.css';

import React, { Fragment } from 'react';

import me from './assets/image/me.jpeg'

const Header = () => (
    <Fragment>
        <header className="App-header">
            <img src={me} className="App-logo" alt="Me" />
            <h1 className="App-title">Karen Garcia</h1>
        </header>
    </Fragment>
);

export default Header;
