var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.set('port', (process.env.PORT || 5000));

// mongoose.connect('localhost', 'simple')

// var personSchema = {
//   firstname: String,
//   lastname: String,
//   email: String
// }

// var Person = mongoose.model('Person', personSchema, 'people')

// app.get('/users', function(req,res){
//   Person.find(function(err, doc){
//     doc.forEach(function(element){
//       console.log(element.get('firstName'))
//     })
//     // var x = doc[0].get('firstName')
//     // console.log(x)
//     // console.log(Object.keys(x))
//     res.send(200);
//   });
// });

// app.get('/', function(req, res){
//   res.static(__dirname +'index.html');
//   console.log('home loaded');
// })

// var mongodbUri = 'mongodb://admin:password@ds063140.mongolab.com:63140/willsentance';
// var mongooseUri = uriUtil.formatMongoose(mongodbUri);

// var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
//                 replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
 

// mongoose.connect(mongooseUri, options);
// var conn = mongoose.connection;             
 
// conn.on('error', console.error.bind(console, 'connection error:'));  
 
// conn.once('open', function() {
//   console.log('success')
//   console.log(mongoose.model('mynewcollection').find());
//   // Wait for the database connection to establish, then start the app.                         
// });

// var x = mongoose.model('mynewcollection', {hello: String});
// console.log(x)


// app.get('/users', function(req, res){
//   mongoose.model('mynewcollection').find(function(err,mynewcollection){
//     console.log('err', mynewcollection)
//     res.send(mynewcollection);
//   });
// });

app.use(express.static(path.join(__dirname, '.')));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});