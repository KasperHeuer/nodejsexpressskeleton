var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'asdf' });
});

router.post('/contact', function (req, res, next) {
  var formData = {
    name: (req.body && req.body.name) || '',
    email: (req.body && req.body.email) || '',
    message: (req.body && req.body.message) || ''
  };

  res.render('index', { title: 'asdf', formData: formData, submitted: true });
});

module.exports = router;
