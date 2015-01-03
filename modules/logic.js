var db = require('./db')

var databaseQuery = function(params, callback){
  var outputCaption = {
    who: null, what: null, location: null, weather: null
  };

  for (key in params){
    category = key.toLowerCase();
    option = params[key].toLowerCase();
    db.Phrase.find({ $and: [
      {category: category}, 
      {option: option}
      ]}, function(err, phrases){
        if (err) return console.error(err);
        var options = Object.keys(phrases).length
        var idxOfOptionPicked = Math.floor(Math.random() * options)
        outputCaption[phrases[idxOfOptionPicked].category] = phrases[idxOfOptionPicked].phrase
        console.log(options, '***', idxOfOptionPicked, '***', phrases);
        console.log('================================');
        console.log(phrases[idxOfOptionPicked])
        console.log('================================');
        console.log('output', outputCaption);
        callback(outputCaption)
    })
  }
}

var formSentence = function(){
  
}

module.exports = databaseQuery;