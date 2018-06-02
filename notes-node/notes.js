console.log('Starting notes.js');

// Remember arrow functions do not bind the 'this' keyword, or the arguments array
module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
}

// 1st solo challenge: create and export a func that sums two #'s
module.exports.add = (a,b) => {
    return a + b;
}