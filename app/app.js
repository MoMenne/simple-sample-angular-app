var app = angular.module("app", []);

app.controller("AppCtrl", function($scope, $http) {
  var app = this;

  $scope.launchCoders = [];

  $http.get('data/sampledata.json')
      .success(function(data) {
        console.log("Grabbed the data");
        $scope.launchCoders = data;
    }).error(function() {
        console.log("boo... there was an error");
    });

})