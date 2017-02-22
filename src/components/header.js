import React from 'react';

const Header = ({ logo }) => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Bem vindo ao Github App</h2>
    <p>Saiba mais sobre os usuários do github</p>
  </div>
);

export default Header;