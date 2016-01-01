admin_app.controller('UsersCtrl', function($scope, $http, $location, $resource) {

  User = $resource('/users/:id', {id: this.id}, {'update': {method: 'PUT'}});
  $scope.users = User.query();

  $scope.show = function(user){

  }

  $scope.new = function(user){
    $scope.new_user = {}
  }

  $scope.create = function(user){
    User.create(user, function(res) {
      debugger;
      console.log('user created');
    })
  }
  
  $scope.edit = function(user){
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
