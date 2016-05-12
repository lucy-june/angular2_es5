/**
 * Created by a548159 on 1/15/16.
 */
(function(app) {
    // document.addEventListener('DOMContentLoaded', function() {
    //     ng.platform.browser.bootstrap(app.AppComponent, [app.Services.TodoService]);
    // });
     document.addEventListener('DOMContentLoaded', function() {
    	ng.platformBrowserDynamic.bootstrap(app.AppComponent, [app.Services.TodoService]);
  		});
})(window.app || (window.app = {}));