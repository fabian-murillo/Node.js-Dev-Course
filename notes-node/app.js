console.log('Starting app');

/* Require lets us load in modules that come bundled in with node,
like the http module.  It also let's use third party libraries,
like Express.  Finally, it let's us break up our app into multiple 
smaller files, for better project structuring. */

// fetch all the contents of the fs module & store in fs variable:
const fs = require('fs');

fs.appendFile('greeting.txt', 'Hello world!', function (err) {
    if (err) {
        console.log('Unable to write to file');
    }
});