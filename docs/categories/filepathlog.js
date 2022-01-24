const path = require('path');
const fs = require('fs');

const folder = 'fun';

const directoryPath = path.join(__dirname, folder);

fs.readdir(directoryPath, function (err, files) {

    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    
    return console.log(files.map((file) => `/categories/${folder}/${file}`));
});