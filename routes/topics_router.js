var express = require("express");
var topics = express.Router();

topics.get('/topics/:id', function(req, res) {
  res.render("topic", {
      id: Number(req.params.id),
      items: req.app.get('postFile').post,
      topics: req.app.get('topicsFile').topics
  });
});

module.exports = topics;
