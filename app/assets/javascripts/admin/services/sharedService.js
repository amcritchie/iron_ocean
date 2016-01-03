admin_app.service('sharedService', [function() {

  this.update_resource = function(update, resource) {
    for (var key in update) {
      if (update.hasOwnProperty(key)) {
        resource[key] = update[key];
      }
    }
  }

}]);
