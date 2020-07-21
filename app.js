const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

hbs.registerPartials(__dirname + '/views/partials');

// Route handlers and the value jose/aline/santi are the end point
// the order of The router handlers that you regist matter.
app.get('/home', (request, response) => {
  response.render('person', { message: 'Welcome to Barack Obama webpage' });
});

app.get('/works', (request, response) => {
  response.render('person', { message: 'Barack Obama did a lot' });
});
app.get('/about', (request, response) => {
  response.render('about', {
    name: 'Barack Obama',
    age: 58,
    location: { city: 'Honolulu, HI', country: 'USA' }
  });
});

app.get('*', (request, response) => {
  response.send('error');
});

app.listen(5500);
