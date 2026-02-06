var express = require('express');
// Router handles endpoints mounted at '/'.
var router = express.Router();

// Render the home page with the form.
router.get('/', function (req, res, next) {
  res.render('index', { title: 'asdf' });
});

// Handle form submission and echo the submitted values.
router.post('/contact', function (req, res, next) {
  // Grab fields from the POST body; express.urlencoded() in app.js enables this.
  var formData = {
    name: (req.body && req.body.name) || '',
    email: (req.body && req.body.email) || '',
    message: (req.body && req.body.message) || '',
  };

  // Render the same page with a flag so the template shows submitted values.
  res.render('index', { title: 'asdf', formData: formData, submitted: true });
});

module.exports = router;
