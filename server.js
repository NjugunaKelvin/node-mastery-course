// require the http and the fs module
const fs = require('fs');
const http = require('http');

// create a server 
const myServer = http.createServer((req,res) => {
    console.log('A response was made');

    // set headers;
    res.setHeader('Content-Type', 'text/html')

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'home.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            res.statusCode = 404;
            break;
                   
    }

    // read the html files
    fs.readFile(path, (err,data) =>{
        if (err) {
            console.log('An error occurred reading the html file');
        }
        else {
            res.end(data)
        }
    });
});

// listen
myServer.listen(3000, 'localhost', () =>{
    console.log('server running well');
});