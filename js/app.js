var app = angular.module('myApp', [])

  app.controller('ExampleController', ['$scope', function($scope) {
    $scope.color = 'blue';
    $scope.specialValue = {
      "id": "12345",
      "value": "green"
    };
  }]);