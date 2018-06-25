console.log('Starting notes.js');

const fs = require('fs');

// Refactoring our try/catch into a re-usable function:
var fetchNotes = () => {
    try {
        // Try fetching the notes from the file:
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (error) {
        // If the file doesn't exist:
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));    
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    // represents a new note:
    var note = {
        title, // ES6, both names are the same, no colon needed
        body
    };
    // Stores an array w/ all the notes that already exist
    // inside the notes array, w/ the same title
    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
    // Add a new note to the file:
        saveNotes(notes);
        return note;
    }   
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

// Fill out remove note:
var removeNote = (title) => {
    console.log('Removing note: ', title);
    // fetch notes
    var notes = fetchNotes();
    // filter notes, removing the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    // save new notes array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    // Break on this line and use repl to output note
    // use read command with title;
    debugger;
    console.log('----')
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`)
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
    removeNote,
    logNote
};