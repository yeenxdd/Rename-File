const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname);

fs.readdir(directoryPath, function (err, files) {
    if (err) throw err;
    let itr = 701; //change this to starting episode num
    files.forEach(function (file) {
        console.log(path.extname(file));
        if (path.extname(file) == '.mkv') { //change file extension when needed
            const EpNum = 277; //itr-1   filename and extension name too
            fs.rename(file, `[HorribleSubs] One Piece - ${itr} [1080p].mkv`, err => {
                if (err) throw err;
                console.log('Rename completed!');
            });
            itr++;
            console.log(file);
        }

    });
});
