admin_app.controller('UsersCtrl', function($scope, $http, $location, $resource) {

  User = $resource('/users/:id', {id: this.id}, {'update': {method: 'PUT'}});
  $scope.users = User.query();

  $scope.show = function(user){

  }

  $scope.new = function(user){
    $scope.user = {}
  }

  $scope.create = function(user){
    User.save(user, function(res) {
      $scope.user = res
    });
  }

  $scope.edit = function(user){
    // $scope.user = user
    User.get({ id: user.id}, function(res) {
      $scope.user = res
    });
  }
  $scope.update = function(user){
    User.update({ id: user.id }, user, function(res) {
      console.log('user updated');
    })
  }

});
