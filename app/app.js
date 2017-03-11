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

// //CONTROLLER
// // use ['$scope', function($scope){ }] instead of just function($scope) to allow functionality after minifying
// myNinjaryApp.controller('NinjaController', ['$scope', function($scope){
//
//   $scope.message = "hey yu"
//
//   $scope.ninjas = ['yoshi', 'crystal', 'ryu', 'shaun']
// }]);

// //FILTERS
// myNinjaryApp.controller('NinjaController', ['$scope', function($scope){
//
// }]);

// ng-include directive, brings in html from another file and dumps where need it
myNinjaryApp.controller('NinjaController', ['$scope', function($scope){
  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    // go into ninjas arr. go to the removedNinja place, and remove 1 element
    $scope.ninjas.splice(removedNinja, 1);
  }

  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "green",
      rate: 50,
      car: true
    },
    {
      name: "Crystal",
      belt: "yellow",
      rate: 30,
      car: true
    },
    {
      name: "Lola",
      belt: "orange",
      rate: 20,
      car: false
    },
    {
      name: "Yoda",
      belt: "black",
      rate: 1000,
      car: true
    }
  ];

}]);
