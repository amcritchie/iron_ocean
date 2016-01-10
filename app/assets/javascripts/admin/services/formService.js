admin_app.service('form', [function() {

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

  function default_growl(type) {
    return {
      ele: 'body', // which element to append to
      type: type, // (null, 'info', 'danger', 'success')
      offset: {from: 'bottom', amount: 20}, // 'top', or 'bottom'
      align: 'right', // ('left', 'right', or 'center')
      width: 250, // (integer, or 'auto')
      delay: 2500, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
      allow_dismiss: true, // If true then will display a cross to close the popup.
      stackup_spacing: 10 // spacing between consecutively stacked growls.
    }
  }

  this.growl = function(type, message) {
    types = [null, 'info', 'danger', 'success', 'warning']
    type = (types.indexOf(type) > -1) ? type : 'success';
    $.bootstrapGrowl(message, default_growl(type));
  }

}]);
