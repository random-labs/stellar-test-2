

StellarSdk.Network.useTestNetwork();
// StellarBase.Network.usePublicNetwork(); if this transaction is for the public network


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
