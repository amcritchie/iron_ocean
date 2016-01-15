admin_app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    controller: 'AdminCtrl',
    templateUrl: '/assets/admin/views/' + 'index.html',
    resolve: {
      first: function(){
        // debugger;
      }
    }
  })
  .state('users', {
    url: '/users',
    controller: 'UsersCtrl',
    templateUrl: '/assets/admin/views/' + 'users/index.html',
    resolve: {
      usersResponce: function(userService) {
        $('#loading-spinner').show();
        return userService.index()
      }
    }
  })
  .state('blogs', {
    url: '/blogs',
    controller: 'BlogsCtrl',
    templateUrl: '/assets/admin/views/' + 'blogs/index.html',
    resolve: {
      blogsResponce: function(blogService) {
        $('#loading-spinner').show();
        return blogService.index()
      }
    }
  })
  .state('article', {
    url: '/blog/:blog_id/article/:id/edit',
    controller: 'ArticlesCtrl',
    templateUrl: '/assets/admin/views/' + 'articles/edit_article.html',
    // templateUrl: view_path + 'users/edit.html',
    resolve: {
      blogsResponce: function(httpService, $stateParams){

        // Link to the article doesn't remove modal backdrop
        $('.modal-backdrop').remove();

        return httpService.get('/blogs/' + $stateParams.blog_id + '/articles/' + $stateParams.id + '/edit',
         {}, function(res) {
          return res
          if (res.status === 200) {
            // form.growl('success', 'Blog Created. <br>' + res.blog.email);
            callback(res);
          } else {
            // form.append_errors($('#new_blog_form'), res.errors)
          }
        });
      }
    }
  })
  .state('articles', {
    url: '/articles',
    controller: 'AdminCtrl',
    templateUrl: '/assets/admin/views/' + 'articles/index.html'
  })
  // .state('login', {
  //   url: '/login',
  //   controller: 'SessionCtrl',
  //   templateUrl: view_path + 'login.html'
  // })
  // $urlRouterProvider.otherwise('/login');
  $urlRouterProvider.otherwise('/');
});
