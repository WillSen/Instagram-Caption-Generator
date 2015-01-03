var express = require('express');
var db = require('./modules/db')
var logic = require('./modules/logic')
// console.log(db)



var app = express();
app.set('port', (process.env.PORT || 5000));



app.get('/phrase', function(req, res){
  logic(req.query, function(outputSentence){
    console.log(outputSentence)
    res.send(outputSentence)
  });
})


app.use(express.static('./public'));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});