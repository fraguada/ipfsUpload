var express = require('express');
var router = express.Router();
const pushFile = require('../src/ipfs').pushFile

/* GET users listing. */
router.post('/', async function(req, res, next) {
  
  const data = req.body.buffer;
  const buffer = Buffer.from(data, 'base64')

  const url = await pushFile( buffer )
  res.json({'url':url})

});

module.exports = router;
