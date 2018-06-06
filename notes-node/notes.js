console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    // represents a new note:
    var note = {
        title, // ES6, both names are the same, no colon needed
        body
    };
    // Try/Catch statement, incase file doesn't exist yet!
    // Try adding a note to the file:
    try {
        var notesString = fs.readFileSync('notes-data.json');
    // If the file doesn't exist that's ok, cuz we have an empty array anyways
    // So we parse the returned data into the notes array
        notes = JSON.parse(notesString);
    } catch (error) {

    }

    // Eventually will store an array w/ all the notes that already exist
    // inside the notes array, w/ the same title
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
    // Add a new note to the file:
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));    
    }   
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