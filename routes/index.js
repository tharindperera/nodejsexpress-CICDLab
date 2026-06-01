const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Welcome to Contoso!',   
  });
});

/* GET ping endpoint. */
router.get('/ping', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = router;