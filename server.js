var express = require('express');
var path = require('path');

var app = express();
app.set('port', (process.env.PORT || 5000));

// app.get('/', function(req, res){
//   res.static(__dirname +'index.html');
//   console.log('home loaded');
// })

app.use(express.static(path.join(__dirname, '.')));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});