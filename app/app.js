// modules
var myNinjaryApp = angular.module('myNinjaApp', []);

// //function that fires before application runs, i.e. routing
// myNinjaryApp.config(function(){
//
// });
//
// // function that fires when applicaiton runs
// myNinjaryApp.run(function(){
//
// });
//
// //create a controller
// myNinjaryApp.controller();
//
// //all of this above^ resides wihtin the myNinjaryApp module

// use ['$scope', function($scope){ }] instead of just function($scope) to allow functionality after minifying
myNinjaApp.controller('NinjaController', ['$scope', function($scope){

  $scope.message = "hey yu"

  $scope.ninjas = ['yoshi', 'crystal', 'ryu', 'shaun']
}]);
