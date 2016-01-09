admin_app.service('growl', [function() {

  function default_growl(type) {
    return {
      ele: 'body', // which element to append to
      type: type, // (null, 'info', 'danger', 'success')
      offset: {from: 'bottom', amount: 20}, // 'top', or 'bottom'
      align: 'right', // ('left', 'right', or 'center')
      width: 250, // (integer, or 'auto')
      delay: 2000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
      allow_dismiss: true, // If true then will display a cross to close the popup.
      stackup_spacing: 10 // spacing between consecutively stacked growls.
    }
  }

  this.success = function(message) {
    $.bootstrapGrowl(
      message,
      default_growl('success')
    );
  }

  this.danger = function(message) {
    $.bootstrapGrowl(
      message,
      default_growl('danger')
    );
  }

}]);
