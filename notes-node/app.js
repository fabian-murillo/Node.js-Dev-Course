console.log('Starting app');

/* Require lets us load in modules that come bundled in with node,
like the http module.  It also let's use third party libraries,
like Express.  Finally, it let's us break up our app into multiple 
smaller files, for better project structuring. */

// fetch all the contents of the fs module & store in fs variable:
const fs = require('fs');

//require the 'os' module:
const os = require('os');

// grabe the user info:
var user = os.userInfo();
console.log(user);

// We use the fs modules 'appnedFile method' to append text to a file
// if it doesn't exist, it creates the file:
// Now we'll use it along with the 'os' module and ES6 template string literals:
fs.appendFile('greeting.txt', `Hello ${user.username}!`, function (err) {
    if (err) {
        console.log('Unable to write to file');
    }
});

