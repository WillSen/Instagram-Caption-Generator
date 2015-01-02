var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:password@ds063140.mongolab.com:63140/willsentance');

var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('yo')
  var phraseSchema = mongoose.Schema({
    phrase: String,
    category: String, 
    option: String
  })
  db.Phrase = mongoose.model('Phrase', phraseSchema);
  var thepuddle = new db.Phrase({
    phrase: 'The Someone found a puddle #rainyday', 
    category: 'asd weather', 
    option: 'a rain'
  });
  // console.log(puddle.phrase)

  

  // thepuddle.save(function(err, phrase){
  //   if (err) return console.error(err);
  //   // console.log(phrase);
    
  // })  
});

module.exports = db;