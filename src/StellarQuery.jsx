import React from 'react';
let StellarSDK = 'stellar-sdk'
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

class StellarQuery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      server.transactions()
        .forLedger(1400)
          .call().then((r) => console.log(r));
    )
  }
}
