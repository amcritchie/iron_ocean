admin_app.controller('ArticlesCtrl', ['$scope', '$resource', '$sce', 'blogService', 'sharedService', 'blogsResponce',
function($scope, $resource, $sce, blogService, sharedService, blogsResponce) {
  $('#loading-spinner').hide();

  $scope.article = blogsResponce.data.article;

  // var someHtmlVar = blogsResponce.data.article.body;
  // var someHtmlVar = "<h1>Header</h1>";
  // var someHtmlVar = "Header";
  //
  // $scope.thisCanBeusedInsideNgBindHtml = $sce.trustAsHtml(someHtmlVar);

  $scope.myHTML =
     'I am an <code>HTML</code>string with ' +
     '<a href="#">links!</a> and other <em>stuff</em>';
  // var Blog = $resource('/blogs/:id', {id: this.id}, {'update': {method: 'PUT'}});
  //
  // $('#loading-spinner').hide();
  // $scope.blogs = blogsResponce.data.blogs
  //
  // $scope.show = function(blog){
  // }
  //
  // $scope.new = function(blog){
  //   $scope.blog = {}
  // }


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
  // $scope.target = function(blog){
  //   $scope.blog = blog;
  //   // $scope.blog.message = "";
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
