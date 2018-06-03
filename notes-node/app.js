console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
// Using a 3rd party npm module (lodash):
const _ = require('lodash'); // I deleted the node modules folder before pushing to github
const notes = require('./notes.js')

// Trying out some lodash functions:
console.log(_.isString(true));
console.log(_.isString('Fabian'));
var filteredArray = _.uniq(['Fabian', '1', 'Fabian', '1','2', '3', '4']);
console.log(filteredArray);


// var res = notes.addNote();
// console.log(res);

// Calling the function we created in notes.js for our 1st solo challenge:
// var sum = notes.add(3,2);
// console.log(sum);

// var user = os.userInfo();

// // Appending the data we've made available here through the require function and the note.js file:
// fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });

