admin_app.service('articleService', ['$q', 'httpService', 'form',
function($q, httpService, form) {

  // this.index = function() {
  //   var defer = $q.defer();
  //   return httpService.get('/blogs', {}, function(res) {
  //     defer.resolve(res);
  //   });
  //   return defer.promise;
  // }

  // user_id = $stateParams.id


  // this.read = function($stateParams) {
  //   // debugger;
  //   return httpService.http_g('/blogs/' + $stateParams.blog_id + '/articles/' + $stateParams.id + '/edit')
  //   //  {}, function(res) {
  //   //    callback();
  //   //  });
  //   // http.planocore('/user/create', null, $('[ng-submit="create()"]'), function(res) {
  //   //   console.log('User created.');
  //   //   callback();
  //   // });
  // }

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

  this.update =function(article, callback) {

    form.loading_begin($('#edit_article_form'));
    var form_data = new FormData($('#edit_article_form')[0]);
    httpService.put('/articles/' + article.id, form_data, function(res) {
      form.loading_finished($('#edit_blog_form'));
      if (res.status === 200) {
        form.growl('success', 'Article Updated. <br>' + article.title);
        callback(res);
      } else {
        form.append_errors($('#edit_blog_form'), res.errors)
      }
    });
  }

}]);
