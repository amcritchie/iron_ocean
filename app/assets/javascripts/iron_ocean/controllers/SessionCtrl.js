iron_ocean_app.controller("SessionCtrl", function($scope, $http, $location) {

  $scope.entries = [
    {name: "Alex"},
    {name: "Noah"},
    {name: "Nick"},
    {name: "Dan"}
  ];

  $scope.login = function() {
    $('#loading-spinner').show();

    var user = $scope.user ? $scope.user : {};

    var url = Object.keys(user).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(user[k])
    }).join('&')

    $http.jsonp(planocore_base_url + '/user/authenticate/?callback=JSON_CALLBACK&'+url)
    .success(function(data){
      $http.post('/decrypt', {encrypted_token: data.token})
      .success(function(res) {
        if (res.status == 200 ){
          localStorage.setItem('authentication_token', res.auth_token);
          $('#loading-spinner').show();
          $location.path("/");
        } else {
          $('#loading-spinner').hide();
          console.log('Login failed');
        }

      })
    });


  };
});
