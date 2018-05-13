import './assets/css/App.css';

import React, { Fragment } from 'react';

import logo from './assets/image/logo.png'

const Header = () => (
    <Fragment>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Karen Garcia</h1>
        </header>
    </Fragment>
);

export default Header;
