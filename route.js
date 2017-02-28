var express = require('express');
var router = express.Router();
var help = require('./helper');
//var bodyParser = require('body-parser');
//var Twitter = require('twitter');


router.post("/search", function(req,res){
  //console.log(req.body);
  help.searchTwat(req.body.keyword,res)
})

router.get("/recent", function(req,res){
  //console.log(req.body);
  help.searchTwat(req.body.keyword,res)
})

module.exports=router
