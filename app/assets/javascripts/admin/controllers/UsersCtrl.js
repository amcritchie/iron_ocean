admin_app.controller("UsersCtrl", function($scope, $http, $location, $resource) {

  User = $resource("/users/:id", {id: this.id}, {update: {method: "PUT"}});
  $scope.users = User.query();

  $scope.show = function(user){

  }

  $scope.edit = function(user){

  }

});
