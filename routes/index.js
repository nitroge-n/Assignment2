var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home' , 
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home' , 
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About Me' , 
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects' , 
  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Me' , 
  });
});
module.exports = router;
