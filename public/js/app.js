var app = angular.module('myApp', [])

app.controller('ExampleController',  function($scope, $http) {
  
  $scope.formData = {};
  $scope.results
  


  $scope.submit = function(input){
    var locationAndWhat, what, who, weather, city;

    // $http.get("/phrase", { params: { user_id: "willsen" }}).success(function (data) {
    //   console.log(data);
    //   // $scope.A = data.username;
    // });

    $http({
        method: "get",
        url: "/phrase",
        params: {
            location: input.location,
            what: input.what,
            who: input.who,
            weather: input.weather,
            city: input.city
        }
    }).success(function(data){
      $scope.results = data;
    })

    // locationAndWhat = "So loving the " +input.location +" and "+input.what+" right now."

    // if (input.who == "Selfie") {
    //   who = " Smug lil Thang "
    // }
    // else if (input.who == "Couple") {
    //   who = " w/ the bae "
    // } 
    // else if (input.who == "Friends") {
    //   who = " with my favorite people in the world"
    // } 
    // else if (input.who == "Nobody") {
    //   who = ""
    // }


    // if (input.weather == "Dry") {
    //   weather = " #Sunkiss"
    // }
    // else if (input.weather == "Rain") {
    //   weather = " Someone found a puddle #rainyday "
    // } 
    // else if (input.weather == "Snow") {
    //   weather = " #snowyday #sweaterweather"
    // } 

    // if (input.city) {
    //   city = "living it up in " + input.city;
    // };

   
    
    // $scope.results = locationAndWhat + who + city + weather
    // console.log($scope.results)



          // if ($scope.formData) {
          //   $scope.list.push(this.text);
          //   $scope.text = '';
          // }
  };
  


  


  
});


//Choose from a set of options
//Generate a string

//Location (Beach, Desert, Mountains)
//What (Workout, Yoga, Fashion, Party, None)
//Video (Beyonce etc...)
//Who (Selfie, Couple, Friends, No person)
//Weather (Hot, Cold)
//City (_)
//Day

//

// $scope.myForm = {};
// $scope.myForm.firstName = "Jakob";
// $scope.myForm.lastName  = "Jenkov";


// 

// City
// take me back to X!
// Living it up in X

// Hot: Flashback from the summer; sunny vacation needed soon
// Hot: #Sunkiss

// Let your light & love shine through
// Because to I really don't wanna get up today..
// Hope everyone is having a happy 🐪day!



// Day
// Ohh monday.. We meet again, sadly coffee you will need to wait till after the gym

// Location
// Nature: #DreamBig

// Time
// Goodnight Sun
// Good Morning Sunshine
// Top of the morning lads!

// Place:
// So missing the X and all the fun right now

// What
// happiness for me is X
// So excited to be X at the Y today 
// Party: X like its 1999
// Workout: Feet don't fail me now I need to work it on out!

// Selfie
// Smug lil Thang
// Oh. You again.
// Loose the tude dude
// This time around. Things are going to be different. 

// Couple
// w/ the bae 