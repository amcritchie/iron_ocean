admin_app.service('httpService', ['$http',
function($http) {

  this.rails_config = {
    transformRequest: angular.identity,
    headers: {'Content-Type': undefined}
  };

  this.post = function(url, data, callback) {
    return $http.post(url, data, this.rails_config)
    .success(callback)
    .error(function(res){
      alert('Error from http request -> ' + res);
    });
  }

  this.put = function(url, data, callback) {
    return $http.put(url, data, this.rails_config)
    .success(callback)
    .error(function(res){
      alert('Error from http request -> ' + res);
    });
  }
}]);
