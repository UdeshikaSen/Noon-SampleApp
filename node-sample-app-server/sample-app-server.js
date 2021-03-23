const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require("fs");

// Get an app from express
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// Enable cors for callers temporarily
app.use(cors())

const hostname = '127.0.0.1';
const port = 3000;

// Get the data from file and use it as the datasource.
let rawdata = fs.readFileSync('sampleData/items.json');
let postData = JSON.parse(rawdata);

// To get all posts and liked posts
app.get('/posts', function (req, res) {

  let likedFlag = req.query.liked;
 
  if (likedFlag !== undefined && likedFlag === "true") {
    var likedPosts = postData.filter(post => post.liked);
    res.json(likedPosts);
  } else {
    res.json(postData);
  }
})

// To like and unlike a post
app.post('/posts/:id/', function (req, res) {
  const reqBody = req.body;
  var postId = req.params.id;

  if (reqBody !== undefined && reqBody.liked !== undefined) {
    postData.forEach(post => {
      if (post.id == postId) {
        post.liked = reqBody.liked;
        post.likes = reqBody.likes;
      }
    });
  }
  // No payload is returned
  res.status(204).send();
})

var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Favor-It server listening at http://%s:%s", host, port)
})
