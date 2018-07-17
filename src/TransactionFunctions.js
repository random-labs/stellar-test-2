//let server = new StellarSdk.Server('horizon.stellar.org') if this transaction is for the public network;
let server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

StellarSdk.Network.useTestNetwork();
// StellarBase.Network.usePublicNetwork(); if this transaction is for the public network


function payLumens(senderPublicKey, lumensAmount, recipientPublicKey) {
  server.loadAccount(senderPublicKey) //either direct input, or from secret as => sourceKeypair.publicKey() where sourceKeypair generated from secret;
  .then((account) => {
    let transaction = new StellarBase.TransactionBuilder(account)
      .addOperation(StellarSdk.Operation.payment({
      destination: receiverPublicKey,
      asset: StellarSdk.Asset.native(),
      amount: lumensAmount, //string!!! max 7DP
      }))
      .build();
    transaction.sign(sourceKeypair)
  }
}
