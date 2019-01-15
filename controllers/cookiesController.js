var express = require("express");

var router = express.Router();

// Import the model (cookie.js) to use its database functions.
var cookie = require("../models/cookie.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cookie.all(function(cookie_data){
    console.log(cookie_data);
    res.render("index",{cookie_data});
  })
})

router.put('/cookies/update', function(req,res){
  cookie.update(req.body.cookie_id, function(result){
    console.log(result);
    res.redirect('/');
  });
});

router.post('/cookies/create', function(req,res){
  cookie.create(req.body.cookie_name, function(result){
    res.redirect('/');
  })
})
  
// Export routes for server.js to use.
module.exports = router;
