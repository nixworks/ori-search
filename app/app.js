'use strict';

// Declare app level module which depends on views, and components
angular.module('oriApp', [
  'ngRoute',
  'oriApp.view1',
  'oriApp.view2',
  'oriApp.navbar',
  'oriApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
