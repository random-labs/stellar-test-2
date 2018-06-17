import sdk from 'stellar-sdk';
import request from 'request';

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const usingTestnet = true;

let stellarUrl;
usingTestnet ? stellarUrl = 'https://friendbot.stellar.org' : stellarUrl = 'http://whatevermainnetlinkis.org';

// Account Creation Functions

export function createKeypair() {
  let pair = sdk.Keypair.random();
  createAccount(pair, accountCreationUrl);
  return pair;
}

export function createAccount(pair) {
  request.get({ 
    url: stellarUrl,
    qs: { addr: pair.publicKey() },
    json: true
  }, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        errorHandler(error, "createAccount")
      }
      else {
        // onAccountCreationSuccess
      }
  });
}

export function errorHandler (error, errorName) {
  console.log(error);
  let errorUrl = `/ErrorMessage/${errorName}`;
  window.location.assign(errorUrl);
  }
}
