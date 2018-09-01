const crypto = require('crypto');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
// var message = 'I am user number 3';
// var hash = crypto.createHmac('sha256', message).digest('hex');
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: crypto.createHmac('sha256', JSON.stringify(data) + 'somesecret').digest('hex')
// }
//
// var resultHash = crypto.createHmac('sha256', JSON.stringify(token.data) + 'somesecret').digest('hex');
//
// if(resultHash === token.hash){
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust');
// }
