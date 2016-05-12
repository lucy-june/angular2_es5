var Service = function() {};
Service.prototype.greeting = function() {
  return 'service';
};

var Cmp = ng.core
  .Component({
    selector: 'cmp',
    // appInjector: [Service]
    providers: [Service]
  }).
  View({
    template: '{{greeting}} world!'
  }).
  Class({
    constructor: [Service, function(service) {
      this.greeting = service.greeting();
    }]
  });

document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(Cmp);
});