// CREATING AN EXPRESS SERVER

// REQUIRE THE PACKAGE
const express = require('express');

// CREATE AN INSTANCE OF AN APP
const app = express();

// RENDER SOME FEW GET REQUESTS
app.get('/', (req,res) =>{
    res.sendFile('./views/home.html', {root: __dirname});
});

// about page
app.get('/about', (req,res) =>{
    res.sendFile('./views/about.html', { root: __dirname});
});

// redirects
app.get('/about-us', (req,res) => {
    res.redirect('/about');
});

// any other endpoint
app.use((req,res) => {
    res.write('an error occurred!!!!')
});



// listen on a port
app.listen(4000, () => {
    console.log('listening for requests on port 4000');
});
