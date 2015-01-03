var express = require('express');
var db = require('./modules/db')
var logic = require('./modules/logic')
// console.log(db)



var app = express();
app.set('port', (process.env.PORT || 5000));



app.get('/phrase', function(req, res){
  logic(req.query, function(input){
    var flag = true
    for (key in input){
      if (input[key] === null){
        console.log('Incomplete')
        var flag = false;
      }
    }
    if (flag === true) {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
      console.log(input);
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    };
    if (input) {};
  });
})


app.use(express.static('./public'));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});