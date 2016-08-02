'use strict';

/**
 * @ngdoc service
 * @name nflDocketApp.current
 * @description
 * # current
 * Factory in the nflDocketApp.
 */

  angular.module('nflDocketApp')
    .factory('current', function ($resource) {
      // Service logic
      // ...

      // Public API here
      return $resource('http://api.sportradar.us/nfl-ot1/games/2016/reg/schedule.json?api_key=x8bxqt5kchjfn48wd55wrbk3', {}, {
        query: {
          method:'GET',

          isArray:false
        }
      });
    });
