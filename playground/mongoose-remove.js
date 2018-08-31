const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
// Todo.findOneAndRemove({_id: '5b896835c2cc3cb9694aa5b8'}).then((todo) => {
//   console.log(todo);
// })

Todo.findByIdAndRemove('5b896835c2cc3cb9694aa5b8').then((todo) => {
  console.log(todo);
});
