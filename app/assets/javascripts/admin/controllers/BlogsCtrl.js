admin_app.controller('BlogsCtrl', ['$scope', '$resource', 'blogService', 'sharedService', 'blogsResponce',
function($scope, $resource, blogService, sharedService, blogsResponce) {
  var Blog = $resource('/blogs/:id', {id: this.id}, {'update': {method: 'PUT'}});

  $('#loading-spinner').hide();
  $scope.blogs = blogsResponce.data.blogs

  $scope.show = function(blog){
  }

  $scope.new = function(blog){
    $scope.blog = {}
  }

  // $scope.create = function(user){
  //   userService.create(function(res) {
  //     $('.modal').modal('hide');
  //     $scope.users.push(res.user)
  //   })
  // }
  //
  // $scope.update = function(user){
  //   userService.update(user, function(res) {
  //     sharedService.update_resource(res.user, $scope.user)
  //     $('.modal').modal('hide');
  //   })
  // }
  //
  // $scope.target = function(user){
  //   $scope.user = user;
  //   $scope.user.message = "";
  // }
  //
  // $scope.activate = function(user){
  //   userService.activate(user, function(res) {
  //     $('.modal').modal('hide');
  //     $scope.user.active = true;
  //   })
  // }
  //
  // $scope.deactivate = function(user){
  //   userService.deactivate(user, user.message, function(res) {
  //     $('.modal').modal('hide');
  //     $scope.user.active = false;
  //   })
  // }

}]);
