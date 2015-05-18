'use strict';

/**
 * @ngdoc function
 * @name ardureaderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ardureaderApp
 */
angular.module('ardureaderApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'DHT 22',
      'TMP36',
      'AngularJS'
    ];

    $scope.fetch = function() {
    	$http.get('http://localhost:7777/reading').success(function(readings) {
            console.log('Success', readings);
            $scope.readings = readings;
        }).error(function() {
            console.log('error');
        });
    };

    // Run fetch to initialize the page
    $scope.fetch();

    // Reading.get(function(data) {
    // 	$scope.readings = data;
    // 	console.log(data);
    // 	console.log(data.humidity);
    // 	console.log(data.TMPtemperature);
    // 	console.log(data.DHTtemperature);
    // });
  });
