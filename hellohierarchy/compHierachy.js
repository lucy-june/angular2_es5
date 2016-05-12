(function() {
  var MyName = ng.core
    .Component({
      selector: 'my-name',
      template: '<p>My name is mudd</p>'
    })
    .Class({
      constructor: function() {}
    });
  
  var FriendsList = ng.core
    .Component({
      selector: 'friends',
      template: '<ul><li *ngFor="#friend of friends">{{friend}}</li></ul>',
      directives: [ng.common.NgFor]
    })
    .Class({
      constructor: function() {
        this.friends = ["Sue", "Joe", "Mike", "Dave", "Bill"];
      }
    });
    
  var HelloApp = 
    ng.core.Component({
      selector: 'hello-app',
      template: '<h1>Hello Angular 2!</h1><my-name></my-name><friends></friends>',
      directives: [MyName, FriendsList]
    })
    .Class({
      constructor: function() {}
    });
  
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(HelloApp);
    // ng.platform.browser.bootstrap(HelloApp);
  });
})();
