admin_app.controller('UsersCtrl', function($scope, $http, $location, $resource) {

  var auth_token = $('meta[name=csrf-token]').attr('content');

  User = $resource('/users/:id', {id: this.id, auth_token: auth_token}, {'update': {method: 'PUT'}});
  $scope.users = User.query();

  $scope.show = function(user){

  }

  $scope.edit = function(user){

  }
  $scope.update = function(user){
    User.update({ id: user.id }, user, function(res) {
      console.log('user updated');
    })
  }

});
