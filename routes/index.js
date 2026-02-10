var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Hey',
    message: 'Hello there!'
  });
});

// Handle form submission
router.post('/contact', function (req, res) {
  var formData = {
    name: req.body?.name || '',
    email: req.body?.email || '',
    message: req.body?.message || '',
  };

  res.render('index', {
    title: 'asdf',
    message: 'Form submitted!',
    formData,
    submitted: true
  });
});

module.exports = router;
