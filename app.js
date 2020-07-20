const express = require('express');
const app = express();

// serve css and other static files from directory "public"
//express.static() returns middleware that handles  every request
//and for wtv request matches a static file,
// it sends the static file

app.use(express.static('public'));

console.log(__dirname);
// Route handlers and the value jose/aline/santi are the end point
// the order of The router handlers that you regist matter.
app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});
app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('*', (request, response) => {
  response.send('error');
});

app.listen(5500);
