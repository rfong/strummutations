var app = angular.module('StrumApp', []);

app.controller('StrumCtrl', function($scope, $http) {
  $scope.patternLength = 8;
  // true=down, false=up
  $scope.stroke = [true, false, true, false, true, false, true, false];
  // active or not
  $scope.pattern = [true, false, true, true, true, true, true, true];

  $scope.refreshPattern = function() {
    $scope.pattern = _.map(_.range($scope.patternLength), function(i) {
        return Math.random() < 0.5;
    });
  };

});
