const express = require('express');
const app = express();
const router = express.Router();
const parser = require('body-parser');
const parserJson = parser.json();

router.get('/', (req,res)=>{
  res.status(200).send({
    process: "succeed!"
  })
});


module.exports = router
