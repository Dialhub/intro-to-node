var fs = require ('fs');

fs.appendFile('myfirstfile.txt', 'Hello this is content', function (err) {
    if(err) throw err;
    console.log('Saved!');
});