admin_app.service('blogService', ['$q', 'httpService', 'form',
function($q, httpService, form) {

  this.index = function() {
    var defer = $q.defer();
    return httpService.get('/blogs', {}, function(res) {
      defer.resolve(res);
    });
    return defer.promise;
  }

  this.create =function(callback) {

    form.loading_begin($('#new_blog_form'));
    var form_data = new FormData($('#new_blog_form')[0]);

    httpService.post('/blogs', form_data, function(res) {
      form.loading_finished($('#new_blog_form'));
      if (res.status === 200) {
        form.growl('success', 'Blog Created. <br>' + res.blog.email);
        callback(res);
      } else {
        form.append_errors($('#new_blog_form'), res.errors)
      }
    });
  }

  this.update =function(blog, callback) {

    form.loading_begin($('#edit_blog_form'));
    var form_data = new FormData($('#edit_blog_form')[0]);

    httpService.put('/blogs/' + blog.id, form_data, function(res) {
      form.loading_finished($('#edit_blog_form'));
      if (res.status === 200) {
        form.growl('success', 'Blog Updated. <br>' + blog.email);
        callback(res);
      } else {
        form.append_errors($('#edit_blog_form'), res.errors)
      }
    });
  }

}]);
