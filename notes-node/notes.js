console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note: ', title, body);
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