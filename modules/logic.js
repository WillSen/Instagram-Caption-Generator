var db = require('./db')

var logic = function(params){
  console.log('==params==', params)
  db.once('open', function(){
    console.log('reached inside logic.js')
    db.Phrase.find({ category: 'weather' }, function(err, phrases){
      if (err) return console.error(err);
      console.log(phrases);
    })
  })  
}

// receive input paramaters
// lookup 'input.weather: dry' in database and return all
// randomly pick one of the phrases
// Add to output array
// loop through array and form full sentence

module.exports = logic;