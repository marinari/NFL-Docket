'use strict';

/**
 * @ngdoc function
 * @name nflDocketApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nflDocketApp
 */
 
  angular.module('nflDocketApp')
    .controller('MainCtrl', function ($scope, current) {
      $scope.current = current.query();
      $scope.selectteam = function (teamname){
        console.log ("selected team: " + teamname);
        $scope.selectedteam = teamname;
        $scope.current = current.query();
      };

    });
