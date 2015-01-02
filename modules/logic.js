var db = require('./db')

var logic = function(params){
  console.log('==params==', params)
  // console.log(db)
  db.once('open', function(){
    console.log('connection opened')
    
    // console.log(params[key])
    
    // for (key in params){
    //   console.log('***',key, params[key],'***')
    //   db.Phrase.find({ $and: [{category: key}, {option: params[key]}] }, function(err, phrases){
    //     if (err) return console.error(err);
    //     console.log(phrases);
    //   })
    // }
    console.log('reached inside logic.js')
    
  })  
}

// receive input paramaters
// lookup 'input.weather: dry' in database and return all
// randomly pick one of the phrases
// Add to output array
// loop through array and form full sentence

module.exports = logic;