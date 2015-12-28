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
  // .state('login', {
  //   url: '/login',
  //   controller: 'SessionCtrl',
  //   templateUrl: view_path + 'login.html'
  // })
  // $urlRouterProvider.otherwise('/login');
  $urlRouterProvider.otherwise('/');
});
