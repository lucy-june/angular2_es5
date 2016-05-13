(function(app) {
  app.AppComponent2 =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'helloworld/hellocomponent.html'
    })
    .Class({
      constructor: function() {}
    });

  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(app.AppComponent2);
  });
})(window.app || (window.app = {}));

