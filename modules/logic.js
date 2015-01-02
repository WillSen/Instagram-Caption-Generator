var db = require('./db')

var logic = function(params){
  console.log('==params==', params)
  console.log(db.Phrase)
  db.Phrase.find({ $and: [{category: 'weather'}, {option: 'dry'}] }, function(err, phrases){
        if (err) return console.error(err);
        console.log(phrases);
  })
  // console.log(db)
  for (key in params){
    console.log('***',key, params[key],'***')
    category = key.toLowerCase();
    option = params[key].toLowerCase();
    console.log('===', category, option)
    db.Phrase.find({ $and: [{category: category}, {option: option}]}, function(err, phrases){
      if (err) return console.error(err);
      console.log(phrases);
    })
  }
  // db.once('open', function(){
  //   console.log('connection opened')
    
  //   // console.log(params[key])
    
  //   // 
  //   console.log('reached inside logic.js')
    
  // })  
}

// receive input paramaters
// lookup 'input.weather: dry' in database and return all
// randomly pick one of the phrases
// Add to output array
// loop through array and form full sentence

module.exports = logic;