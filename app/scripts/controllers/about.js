'use strict';

/**
 * @ngdoc function
 * @name nflDocketApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nflDocketApp
 */

angular.module('nflDocketApp')
  .controller('AboutCtrl', function ($scope, $routeParams, current) {
    $scope.current = current.query();

    console.log ($routeParams.teamname);
    $scope.teamname= $routeParams.teamname;
});
