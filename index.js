var app = angular.module('StrumApp', []);

app.controller('StrumCtrl', function($scope, $http) {
  // true=down, false=up
  $scope.stroke = [true, false, true, false, true, false, true, false];

  // active or not
  $scope.pattern = [true, false, true, true, true, true, true, true];
});
