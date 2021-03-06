'use strict';

moment.locale('nl');

// Declare app level module which depends on views, and components
angular.module('oriApp', [
  'ngRoute',
  'ngTouch',
  'matchMedia',
  'infinite-scroll',
  'ui-rangeSlider',
  'chart.js',
  'daterangepicker',
  'oriApp.constants',
  'oriApp.options',
  'oriApp.viernulvier',
  'oriApp.search',
  'oriApp.navbar',
  'oriApp.council',
  'oriApp.home',
  'oriApp.version'
]).
config(['$routeProvider', function($routeProvider) {
//  $routeProvider.when('/', {redirectTo: '/search'});
}]);
