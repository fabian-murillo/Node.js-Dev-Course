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
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title already taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    console.log('reading note');
    var note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}