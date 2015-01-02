var db = require('./db')

var logic = function(params){
  var outputCaption = {
    who: null, what: null, location: null, weather: null
  };

  for (key in params){
    category = key.toLowerCase();
    option = params[key].toLowerCase();
    console.log('===', category, option)
    db.Phrase.find({ $and: [{category: category}, {option: option}]}, function(err, phrases){
      if (err) return console.error(err);
      var options = Object.keys(phrases).length
      var idxOfOptionPicked = Math.floor(Math.random() * options)
      outputCaption[phrases[idxOfOptionPicked].category] = outputCaption[phrases[idxOfOptionPicked].phrase]
      console.log(options, '***', idxOfOptionPicked, '***', phrases);
      console.log('================================');
      console.log(phrases[idxOfOptionPicked])
      console.log('================================');
      console.log('output', outputCaption);
    })
  }
  

}

// receive input paramaters
// lookup 'input.weather: dry' in database and return all
// randomly pick one of the phrases
// Add to output array
// loop through array and form full sentence

module.exports = logic;