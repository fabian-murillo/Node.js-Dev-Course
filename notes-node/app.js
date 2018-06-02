console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
// Using a relative path to tell node where to look for this file:
const notes = require('./notes.js')

var res = notes.addNote();
console.log(res);

var sum = notes.add(3,2);
console.log(sum);

// var user = os.userInfo();

// // Appending the data we've made available here through the require function and the note.js file:
// fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });

