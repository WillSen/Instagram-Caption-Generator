var app = angular.module('myApp', [])

  app.controller('ExampleController', ['$scope', function($scope) {
    $scope.color = 'blue';
    $scope.specialValue = {
      "id": "12345",
      "value": "green"
    };
  }]);


// //Choose from a set of options
// //Generate a string

// //Location (Beach, Party, Nature)
// //Video (Beyonce etc...)
// //Who (Selfie, Couple, Friends, No person)
// //Weather (Hot, Cold)
// //City (_)

// //

// // $scope.myForm = {};
// // $scope.myForm.firstName = "Jakob";
// // $scope.myForm.lastName  = "Jenkov";