admin_app.service('formService', [function() {

  this.loading_begin = function($form) {
    $form.find('[type="submit"]').hide();
    $form.find('.waiting-view').show();
    this.remove_errors($form);
  }

  this.loading_finished = function($form) {
    $form.find('[type="submit"]').show();
    $form.find('.waiting-view').hide();
  }

  this.remove_errors = function($form) {
    $('.error-message').remove();
  }

  this.append_errors = function($form, errors) {
    for (var key in errors) {
      if (errors.hasOwnProperty(key)) {
        $form.find('[for="' + key + '"]').append(
          "<span class='error-message'>" + errors[key] + "</span>"
        );
      }
    }
  }

  this.success_message = function(message) {
    $('.alert-success').fadeIn()
    setTimeout(function() {
      $('.alert-success').fadeOut()
    },2000);
  }

}]);
