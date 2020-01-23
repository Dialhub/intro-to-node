var fs = require ('fs');

fs.rename('diaprac.js', 'renamed_dia.js', function(err){

    if (err) throw err;
    console.log('File Renamed !');

});