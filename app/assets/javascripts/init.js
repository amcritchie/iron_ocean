var iron_ocean_app = angular.module('IronOcean', ['ui.router'])
var admin_app = angular.module('Admin', ['ui.router', 'ngResource', 'angular-growl'])
var blog_app = angular.module('Blogs', ['ui.router'])

var planocore_domain
if (window.location.host === "www.planoadmin.com") {
  planocore_domain = "https://www.planocore.com";
} else if (window.location.host === "staging.planoadmin.com") {
  planocore_domain = "https://staging.planocore.com";
} else {
  planocore_domain = "http://localhost:4000/";
}

var planocore_base_url = planocore_domain
var planoadmin_base_url = 'http://localhost:3000'
var view_path = '/assets/views/'

if (iron_ocean_app) {
  var view_path = '/assets/iron_ocean/views/'
} else if (blog_app) {
  var view_path = '/assets/blog/views/'
} else {
  console.log('No Application loaded');
}

// Eight hours in seconds.
var session_length = 28800

console.log('angular initialized.');
