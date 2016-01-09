admin_app.controller('UsersCtrl', ['$scope', '$resource', 'userService', 'sharedService', 'usersResponce',
function($scope, $resource, userService, sharedService, usersResponce) {
  var User = $resource('/users/:id', {id: this.id}, {'update': {method: 'PUT'}});

  $('#loading-spinner').hide();
  $scope.users = usersResponce.data.users

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

  $scope.update = function(user){
    userService.update(user, function(res) {
      sharedService.update_resource(res.user, $scope.user)
      $('.modal').modal('hide');
    })
  }

  $scope.target = function(user){
    $scope.user = user;
    $scope.user.message = "";
  }

  $scope.activate = function(user){
    userService.activate(user, function(res) {
      $('.modal').modal('hide');
      $scope.user.active = true;
    })
  }

  $scope.deactivate = function(user){
    userService.deactivate(user, user.message, function(res) {
      $('.modal').modal('hide');
      $scope.user.active = false;
    })
  }

}]);
