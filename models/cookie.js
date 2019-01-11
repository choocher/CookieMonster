// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cookie = {
  all: function(cb) {
    orm.all("cookies", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("cookies", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("cookies", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (cookiesController.js).
module.exports = cookie;
