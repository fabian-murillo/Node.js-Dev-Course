console.log('Starting notes.js');

// Use module.exports to make data available to app.js:
module.exports.age = 28;
// exports, is actually an object, which is really a property, on the larger module object:
console.log(module)
// so module is an object, with a propery on it called exports, that correlates to another 
// object, which we can then append data to. That object, is what module.exports points to...
