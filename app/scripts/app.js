'use strict';

/**
 * @ngdoc overview
 * @name ardureaderApp
 * @description
 * # ardureaderApp
 *
 * Main module of the application.
 */
angular
  .module('ardureaderApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    // Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });
  // .factory('Reading', function($resource) {
  //     return $resource('http://localhost:7777/reading');
  // });
