// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5b87ca4a3873cb268cdb3d4c')
//   },{
//     $set: {
//     completed: true
//   }
// },{
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b87cc836213e10628f57977')
},{
  $set: {
    name: 'ABC'
  },
  $inc: {
    age: 1
  }
},{
  returnOriginal: false
}).then((result) => {
  console.log(result);
})
 // client.close();
});
