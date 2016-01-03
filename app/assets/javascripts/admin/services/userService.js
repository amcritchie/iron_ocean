admin_app.service('userService', ['httpService', 'formService',
function(httpService, formService) {

  this.create =function(callback) {

    formService.loading_begin($('#new_user_form'));
    var form_data = new FormData($('#new_user_form')[0]);

    httpService.post('/users', form_data, function(res) {
      this.loading_finished($('#new_user_form'));
      if (res.status === 200) {
        callback(res);
      } else {
        formService.append_errors($('#new_user_form'), res.errors)
      }
    }
  )}

  this.update =function(user, callback) {

    formService.loading_begin($('#edit_user_form'));
    var form_data = new FormData($('#edit_user_form')[0]);

    httpService.put('/users/' + user.id, form_data, function(res) {
      formService.loading_finished($('#edit_user_form'));
      if (res.status === 200) {
        callback(res);
      } else {
        formService.append_errors($('#edit_user_form'), res.errors)
      }
    }
  )}

}]);
