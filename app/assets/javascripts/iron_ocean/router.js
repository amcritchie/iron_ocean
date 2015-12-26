iron_ocean_app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('loginn', {
    url: '/',
    controller: 'SessionCtrl',
    templateUrl: view_path + 'login.html',
    resolve: {
      first: function(){
        // debugger;
      }
    }
  })
  .state('login', {
    url: '/login',
    controller: 'SessionCtrl',
    templateUrl: view_path + 'login.html'
  })
  $urlRouterProvider.otherwise('/login');
});
