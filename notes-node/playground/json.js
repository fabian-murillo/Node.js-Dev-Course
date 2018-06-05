// Converting an object to a string:
// var obj = {
//  name: 'Fabian'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// Converting a string to an object:
// var personString = '{"name": "Fabian", "age": 28}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

// Writing and reading to a JSON file:
const fs = require('fs');

/// define an obj that will be stored in our file:
var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

// convert it to a json string:
var originalNoteString = JSON.stringify(originalNote);
// write the string to a file:
fs.writeFileSync('notes.json', originalNoteString);
// read the string from the file and store it in a var:
var noteString = fs.readFileSync('notes.json');
// convert the string var back into an object:
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);