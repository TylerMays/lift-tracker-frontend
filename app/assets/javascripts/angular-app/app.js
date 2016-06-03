angular.module('LiftTracker', [])
.controller('Ctrl', function($scope, $filter, $http, $timeout) {

  console.log("hi there");

  $scope.getJobs = function() {
    $http.get('https://rails5-bookstore-api.herokuapp.com/books').then(function(response) {
      console.log(response.data);
      $scope.list = response.data;
    });
  };

  $scope.postJob = function(job) {
    $http.post('/jobs', job).then(function(response) {
      $scope.list = response.data;
      console.log("POST: ",$scope.list);
    });
  };

  $scope.putJob = function(job) {
    $http.put('/jobs', job).then(function(response) {
      $scope.list = response.data;
      console.log("PUT: ", $scope.list);
    });
  };

  $scope.getJobs();
});
