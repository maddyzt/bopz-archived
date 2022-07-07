const express = require('express');
const router = express.Router();


// api request to public api, which will get json that the client side can fetch
router.get('/:username', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/my_profile', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
