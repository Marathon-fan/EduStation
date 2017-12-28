const Post = require('./models/post.model');

const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const graphql = require('graphql')
const graphqlHTTP = require('express-graphql')

app.use(bodyParser.urlencoded({extended:true}))


function testList(params) {
  const limit = 50;
  const skip = 0 ;
  return Post.list({ limit, skip }) //
}


//app.use('/', testList);

//start the server
app.listen(3000, () => {
  console.log("+++Express Server is running.");
});

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var result = testList().toString();
  res.write(result)
  res.end();

});
