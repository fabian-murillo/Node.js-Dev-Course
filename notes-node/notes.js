console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    // represents a new note:
    var note = {
        title, // ES6, both items are the same, no colon needed
        body
    }

    notes.push(note);
    // Add a new note to the file:
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting note: ', title);
};

var removeNote = (title) => {
    console.log('Removing note: ', title);
};
/*
We can define an entire obj that gets set to exports,
in ES6, there's a shortcut for this, 
if the obj property name's value, is the same as a variable
you can leave off the colon and the value
 */
module.exports = {
    // so the following:
    // addNote: addNote
    // is the same as just this:
    addNote,
    getAll,
    getNote,
    removeNote
};