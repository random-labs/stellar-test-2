import {createKeypair} from './StellarFunctions.js';

test('test if Jest is working - baseline', () => {
  expect(1+2).toBe(3);
});

test('createKeypair should return a value', () => {
  let newKeypair = createKeypair()
  expect(newKeypair).toEqual(expect.anything());
});

test('createKeypair should push secret', async () => {
  expect.assertions(1);
  let newAccount = await createKeypair()
  expect(newAccount.secret).toEqual(expect.anything());
});
