var express = require("express");
var path = require("path");
var app = express();


app.set('postFile', require('./config/post.json'));
app.set('topicsFile', require('./config/topics.json'));


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))

app.use(require("./routes/root_router"));
app.use(require("./routes/posts_router"));
app.use(require("./routes/topics_router"));
app.use(express.static('public'));

app.listen(app.get('port'), function() {
  console.log('Node luistert op poort', app.get('port'));
});



//procfile nog declareren!