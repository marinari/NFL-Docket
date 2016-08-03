'use strict';

/**
 * @ngdoc function
 * @name nflDocketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nflDocketApp
 */

angular.module('nflDocketApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();
  });
