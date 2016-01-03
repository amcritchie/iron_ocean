admin_app.controller('UsersCtrl', ['$scope', '$resource', 'userService', 'sharedService',
  function($scope, $resource, userService, sharedService) {

  var User = $resource('/users/:id', {id: this.id}, {'update': {method: 'PUT'}});

  $scope.users = User.query();

  $scope.show = function(user){
  }

  $scope.new = function(user){
    $scope.user = {}
  }

  $scope.create = function(user){
    userService.create(function(res) {
      $('.modal').modal('hide');
      $scope.users.push(res.user)
    })
  }

  $scope.edit = function(user){
    $scope.user = user;
  }

  $scope.update = function(user){
    userService.update(user, function(res) {
      sharedService.update_resource(res.user, $scope.user)
      $('.modal').modal('hide');
    })
  }

}]);
