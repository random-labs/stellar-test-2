import sdk from 'stellar-sdk';
import request from 'request';

const server = new sdk.Server('https://horizon-testnet.stellar.org');
const usingTestnet = true;

let stellarUrl;
usingTestnet ? stellarUrl = 'https://friendbot.stellar.org' : stellarUrl = 'http://whatevermainnetlinkis.org';

// Account Creation Functions

export function createKeypair() {
  let pair = sdk.Keypair.random();
  createAccount(pair);
  let keypair = [];
  keypair.push(pair.secret());
  return keypair;
}

function createAccount(pair) {
  request.get({
    url: stellarUrl,
    qs: { addr: pair.publicKey() },
    json: true
  }, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        errorHandler(error, "createAccount")
      }
      else {
        onAccountCreationSuccess(response, body)
      }
  });
}

function onAccountCreationSuccess(response,body) {
  console.log(response);
  console.log(body);
}

function errorHandler(error, errorName) {
  console.log(error);
  let errorUrl = `/ErrorMessage/${errorName}`;
  window.location.assign(errorUrl);
  }
