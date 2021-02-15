var express = require('express');
var router = express.Router();

/* GET reviews listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/vax', function(req, res, next) {
    res.render('vax', { title: 'Covid-19 Vaccines' });
});

module.exports = router;