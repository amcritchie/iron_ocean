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
    controller: 'AdminCtrl',
    templateUrl: '/assets/admin/views/' + 'blogs/index.html'
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
