const fs = require('fs');
const _ = require('lodash')

const notes = require('./notes.js')

// Accessing CL arg's app was intitialized with using process.argv: 
console.log(process.argv); // short for arguments vector, similar to an args array
// Grabbing the 3rd item in the arguments vector:
var command = process.argv[2];
// Logging it to the console:
console.log('Command: ', command);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading notes');
} else if (command === 'remove') {
    console.log('Removing note');
}else {
    console.log('Command not recognized');
}