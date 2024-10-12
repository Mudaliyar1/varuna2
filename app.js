const express = require("express"),
    session = require("express-session"),
    path = require("path"),
    app = express();



  app
    .engine("html", require("ejs").renderFile) // Set the engine to html (for ejs template)
    .set("view engine", "ejs")
    .use(express.static(path.join(__dirname, "/public"))) // Set the css and js folder to ./public
    .set("views", path.join(__dirname, "/views")) // Set the ejs templates to ./views
    
    app.get('/', function(req, res) {
        res.render('index');
      });
    
    app.get('/about', function(req, res) {
        res.render('about-company');
      });
    
    app.get('/about-varuna', function(req, res) {
        res.render('about-varuna');
      });
    
  /* Start */
  app.listen(8080);
console.log('http://localhost:8080/');