'use strict';

/**
 * @ngdoc function
 * @name nflDocketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nflDocketApp
 */

 angular.module('nflDocketApp')
   .controller('MainCtrl', function ($scope, $location, current) {
     $scope.current = current.query();

     $scope.selectteam = function (teamname){
         $location.path('/about/' + teamname);
     };
   });

/*
  function formatJSONDate(jsonDate) {
    var newDate = dateFormat(jsonDate, "mm/dd/yyyy");
    return newDate;
  }

var date = new Date(jsonDate);
*/
