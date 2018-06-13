import './assets/css/App.css';
import './assets/css/index.css';

import Footer from './Footer';
import Header from './Header';
import HeaderNavbar from './HeaderNavbar'
import React from 'react';

const App = () => (
  <div className="App">
    <Header/>
    <HeaderNavbar/>
    <Footer/>
  </div>
);

export default App;
