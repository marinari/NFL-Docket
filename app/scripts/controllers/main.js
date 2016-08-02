'use strict';

/**
 * @ngdoc function
 * @name nflDocketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nflDocketApp
 */
/*
angular.module('nflDocketApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/

angular.module('nflDocketApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();
  });
