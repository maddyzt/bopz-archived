const express = require('express');
const router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
});

module.exports = router;
