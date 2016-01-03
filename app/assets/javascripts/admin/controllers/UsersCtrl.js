admin_app.controller('UsersCtrl', ['$scope', '$http', '$location', '$resource', 'userService',
  function($scope, $http, $location, $resource, userService) {

  var User = $resource('/users/:id', {id: this.id}, {'update': {method: 'PUT'}});

  $scope.users = User.query();
  debugger;

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
    User.get({ id: user.id}, function(res) {
      res.image = res.image.url
      $scope.user = res
    });
  }

  $scope.update = function(user){
    userService.update(user, function(res) {
      // debugger;

      $('.modal').modal('hide');
    })
  }

}]);
