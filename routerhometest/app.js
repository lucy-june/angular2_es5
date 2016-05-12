'use strict';

(function (app) {

app.Main = ng.core.Component({
    selector: 'hometest',
    providers: [ng.router_deprecated.ROUTER_PROVIDERS,]
}).
View({
 directives: [ng.router_deprecated.ROUTER_DIRECTIVES],
 providers: [ng.router_deprecated.ROUTER_PROVIDERS],
 templateUrl: 'routerhometest/main.html'
}).
Class({
 constructor: [ng.router_deprecated.Router,function (router) {
                router.config([
                    // { path: '/', redirectTo: '/home'},
					{ path: '/home', component: app.HomeComponent, as: 'Home'},
					{ path: '/test', component: app.TestComponent, as: 'Test'}
                ]);

                console.log("ccccc");
  }]
});

})(window.app);