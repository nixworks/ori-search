'use strict';

var defered_home_resolver = {
  perform: ['$route', 'ConstantsService', 'OptionsService', 'SearchService', '$q',
  function ($route, ConstantsService, OptionsService, SearchService, $q) {
    var defer = $q.defer();

    console.log('performing resolve for home page');
    ConstantsService.get_promise().then(function (data) {
      console.log('all constants data was retrieved!');
      defer.resolve(null);
    });

    return defer.promise;
  }]
};

angular.module('oriApp.home', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'components/home/home.html',
    controller: 'HomeCtrl',
    resolve: defered_home_resolver
  });
}])

.controller('HomeCtrl', ['$scope', '$location', 'ORIAPIService', 'ConstantsService', 'OptionsService',
function($scope, $location, ORIAPIService, ConstantsService, OptionsService) {
  console.log('Initializing home controller!');
  $scope.municipalities = ConstantsService.get_municipalities();
  console.dir($scope.municipalities);
  OptionsService.set_internal_option('single_mode', false);
  OptionsService.set_internal_option('municipality', undefined);
}]);
