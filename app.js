
var express = require('express');
var path = require('path');



var app = express();


// Define routes
const routes = [
  '/chat',
  '/exp',
  '/person',
  '/planet',
  '/travel',
  '/index',
  '/menu'
];

// Serve static files (HTML, images) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define route for index page
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'pages', 'index.html');
  res.sendFile(filePath);
});

// Define routes for serving HTML pages
routes.forEach(route => {
  app.get(route, (req, res) => {
    const filePath = path.join(__dirname, 'public', 'pages', `${route.slice(1)}.html`);
    res.sendFile(filePath);
  });
});

// Handle 404 - Page Not Found
app.use((req, res) => {
  const filePath = path.join(__dirname, 'public', 'pages', '404.html');
  res.status(404).sendFile(filePath);
});


module.exports = app;
