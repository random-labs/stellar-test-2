//let server = new StellarSdk.Server('horizon.stellar.org');
let server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

StellarSdk.Network.useTestNetwork();
// StellarBase.Network.usePublicNetwork(); if this transaction is for the public network

// UI should pass tBuilder a transaction details object
function tBuilder(transactionDetails){
    let {address, sequenceNumber, payeeAddress, assetType, paymentAmount} = transactionDetails;
    let account=new StellarBase.Account(transactionDetails);

    let transaction = new StellarBase.TransactionBuilder(account)
    // add a payment operation to the transaction
    .addOperation(StellarBase.Operation.payment({
      destination: payeeAddress,
      asset: assetType,
      amount: paymentAmount
    }))
    // .addOperation(StellarBase.Operation.setOptions({
    //         signer: {
    //             ed25519PublicKey: secondAccountAddress,
    //             weight: 1
    //         }
    //     }))
    .build();
}

function payLumens(senderPublicKey, lumensAmount, recipientPublicKey) {
  server.loadAccount(senderPublicKey) //either direct input, or from secret as => sourceKeypair.publicKey() where sourceKeypair generated from secret;
  .then(function(account) {
    let transaction = new StellarBase.TransactionBuilder(account)
    .addOperation(StellarSdk.Operation.payment({
      destination: receiverPublicKey,
      asset: StellarSdk.Asset.native(),
      amount: lumensAmount, //string!!! max 7DP
    }))
  .build();
  }
}
