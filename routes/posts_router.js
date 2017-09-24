var express = require("express");
var post = express.Router();

post.get('/items/:id', function(req, res) {
  var postFile = req.app.get('postFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  while (teller < postFile.post.length ) {
    if (postFile.post[teller].id == id) {
      item = postFile.post[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("post", {
      item: item,
        topics: req.app.get('topicsFile').topics
    });
  } else {
    res.render("404", {});
  }
});

module.exports = post;
