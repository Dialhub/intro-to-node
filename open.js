var fs = require ('fs');

fs.open('secondfile.txt', 'w', function(err, file){
    if(err) throw err;
    console.log('Saved!');

});