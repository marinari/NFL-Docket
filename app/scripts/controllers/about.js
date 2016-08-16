'use strict';

/**
 * @ngdoc function
 * @name nflDocketApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nflDocketApp
 */

angular.module('nflDocketApp')
  .controller('AboutCtrl', function ($scope, current) {
    $scope.current = current.query();
      $scope.selectteam = function (teamname){
        /*console.log ("selected team: " + teamname); this line is giving error warnings */
        $scope.selectedteam = teamname;
        $scope.current = current.query();
    };

});
