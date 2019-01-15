// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cookie = {
  all: function(cb) {
    orm.all("cookies", function(res) {
      cb(res);
    })
  },
  
  update: function(id,cb) {
    orm.update("cookies",id,cb); 
  }
}

// Export the database functions for the controller (cookiesController.js).
module.exports = cookie;
