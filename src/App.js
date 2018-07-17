import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {createKeypair, keypairTest} from './AccountCreationFunctions.js';

import StellarSdk from 'stellar-sdk';
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
var pair = StellarSdk.Keypair.random();

class App extends Component {

  // stellarQuery() {
  //   server.transactions()
  //   .forLedger(1400)
  //   .call().then(function(r){ console.log(pair.secret(), pair.publicKey()); });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Stellar</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {createKeypair()}
          Test: <br />
          {keypairTest()}
          Test
        </p>
      </div>
    );
  }
}

export default App;
