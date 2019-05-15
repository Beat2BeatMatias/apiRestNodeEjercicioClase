var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.get('/sites', function(req, res, next) {
  res.sendfile('public/page/index.html');
});
router.get('/sites/categories', function(req, res, next) {
  res.sendfile('public/page/categories.html');
});

router.get('/saludo', function(req, res, next) {
  res.render('pepe', { saludo: 'Buen día', nombre:'Matias'});
});

module.exports = router;
