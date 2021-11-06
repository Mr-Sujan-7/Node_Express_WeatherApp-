'use strict';
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
// app.engine("html", require("hbs").__express);
const port = process.env.PORT || 8000;

// Public Static Path
const Static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', template_path);
app.use(express.static(Static_path));
hbs.registerPartials(partials_path);

// Routing
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/weather', (req, res) => {
  res.render('weather');
});

app.get('*', (req, res) => {
  res.render('404error', {
    errormsg: 'Oops! Page Not Found',
  });
});

app.listen(port, () => {
  console.log(`the port number is ${port}`);
});
