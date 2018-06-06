const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs');

const notes = require('./notes.js')


const argv = yargs.argv; // Where the yargs library stores its version of the args your app ran with
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    var message;
    note === undefined ? message = 'That note title already exists' : message = 'Added a new note: ' + note.title + ',' + note.body;
    console.log(message);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title, argv.body);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}