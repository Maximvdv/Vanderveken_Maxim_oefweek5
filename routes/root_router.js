var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
      post: req.app.get('postFile').post,
      topics: req.app.get('topicsFile').topics
  });
});

module.exports = root;
