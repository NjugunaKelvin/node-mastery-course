const fs = require('fs');

// read files
fs.readFile('./docs/hello.txt', (err,data) =>{
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

// NOTE: The readFile() is an async method by default


// WRITING FILES
fs.writeFile('./docs/helo.txt', 'Hello World', () =>{
    console.log('File was written');
})

// DIRECTORIES
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('Folder created');
})
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        };
        console.log('Folder deleted');
    })
};


// DELETE FILES
if (fs.existsSync('./docs/deleteMe.txt')) {
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File deleted');
    })
}
