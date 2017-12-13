(function() {
  'use strict'

  angular.module('angularFilters', [])
  .controller('Controller', Controller)

  Controller.$inject = ['$scope', '$filter'];

  function Controller($scope, $filter) {
    var count = 0;
    $scope.value = 3;
    $scope.name = ' AliVane ';
    $scope.CookieCost = .45;
    $scope.button = function () {
        if(count == 3) count = 0;
        count ++;
        $scope.value = count;
        return count;
    }
    $scope.msg = function () {
      var msg = 'Hello, How are you?';
      var output = $filter('uppercase')(msg)
      return output
    }

  };

})()
