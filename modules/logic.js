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

var createSentence = function(params){
  databaseQuery(params, function(input){
    var flag = true
    var outputSentence = ""
    for (key in input){
      if (input[key] === null){
        console.log('Incomplete')
        var flag = false;
      }
    }
    if (flag === true) {
      var order = [who, what, location, weather]
      
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
      console.log(input);
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    };
    if (input) {};
  });
}

module.exports = createSentence;