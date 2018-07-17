import sdk from 'stellar-sdk';
import request from 'request';

const server = new sdk.Server('https://horizon-testnet.stellar.org');
const usingTestnet = true;

let stellarUrl;
usingTestnet ? stellarUrl = 'https://friendbot.stellar.org' : stellarUrl = 'http://whatevermainnetlinkis.org';



export function createKeypair() {
  let pair = sdk.Keypair.random();
  createAccount(pair);
  let keypair = [];
  keypair.push(pair.secret());
  keypair.push(pair.publicKey());
  return keypair;
}

export function keypairTest() {
  let {Keypair} = sdk;
  let pair = Keypair.random();
  let keypair = [];
  keypair.push(pair.secret());
  keypair.push(pair.publicKey());
  return keypair;
}

function createAccount(pair) {
  request.get({
    url: stellarUrl,
    qs: { addr: pair.publicKey() },
    json: true
  }, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        errorHandler(error, "createAccount");
      }
      else {
        //API.parseStoreResponse(response,body,pair);
      }
  });
}

function errorHandler(error, errorName) {
  //API.errorMessages(error);
  let errorUrl = `/ErrorMessage/${errorName}`;
  window.location.assign(errorUrl);
  }
