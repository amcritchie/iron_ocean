admin_app.service('userService', ['$q', 'httpService', 'form',
function($q, httpService, form) {

  this.index = function() {
    var defer = $q.defer();
    return httpService.get('/users', {}, function(res) {
      defer.resolve(res);
    });
    return defer.promise;
  }

  this.create =function(callback) {

    form.loading_begin($('#new_user_form'));
    var form_data = new FormData($('#new_user_form')[0]);

    httpService.post('/users', form_data, function(res) {
      form.loading_finished($('#new_user_form'));
      if (res.status === 200) {
        form.growl('success', 'User Created. <br>' + res.user.email);
        callback(res);
      } else {
        form.append_errors($('#new_user_form'), res.errors)
      }
    });
  }

  this.update =function(user, callback) {

    form.loading_begin($('#edit_user_form'));
    var form_data = new FormData($('#edit_user_form')[0]);

    httpService.put('/users/' + user.id, form_data, function(res) {
      form.loading_finished($('#edit_user_form'));
      if (res.status === 200) {
        form.growl('success', 'User Updated. <br>' + user.email);
        callback(res);
      } else {
        form.append_errors($('#edit_user_form'), res.errors)
      }
    });
  }

  this.activate = function(user, callback) {
    form.loading_begin($('#reactivate_user_form'));
    httpService.post('/users/' + user.id + '/reactivate' , {}, function(res) {
      form.growl('success', 'User Reactivated. <br>' + user.email);
      form.loading_finished($('#reactivate_user_form'));
      callback(res);
    });
  }

  this.deactivate = function(user, message, callback) {

    var form_data = new FormData();
    form_data.append('message', message);

    form.loading_begin($('#deactivate_user_form'));
    httpService.post('/users/' + user.id + '/deactivate' , form_data, function(res) {
      form.growl('success', 'User Deactivated. <br>' + user.email);
      form.loading_finished($('#deactivate_user_form'));
      callback(res);
    });
  }

}]);
