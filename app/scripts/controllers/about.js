'use strict';

/**
 * @ngdoc function
 * @name ardureaderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ardureaderApp
 */
angular.module('ardureaderApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
