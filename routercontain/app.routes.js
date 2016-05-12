
(function (app) {
    app.View1 = ng.core
        .Component({
            template: "<p>View {{ viewName }} loaded with the router</p>"
        })
        .Class({
            constructor: [function Start() {
                this.viewName = "View1";
            }]
        });

}(window.app || (window.app = {})));

(function (app) {
    app.View2 = ng.core
        .Component({
            template: "<p>View {{ viewName }} loaded with the routeraaaaaaaaaaaaaaa</p>"
        })
        .Class({
            constructor: function() {
                this.viewName = "View222222222";
            }
        });

}(window.app || (window.app = {})));



(function (app) {
    app.MyRoutes = ng.core
        .Component({
            selector: "my-routes",
            providers: [ng.router_deprecated.ROUTER_PROVIDERS]
        })
        .View({
            directives: [ng.router_deprecated.ROUTER_DIRECTIVES],
            template: "<router-outlet></router-outlet>"
        })
        .Class({
            constructor: [ng.router_deprecated.Router,function (router) {
                router.config([
                    { path: "/", component: app.View2 },
                    // { path: "/", redirectTo: "/search" },
                    { path: "/search", component: app.View1 },
                    { path: "/haha", component: app.View2 },
                    { path: "/hehe", component: app.View2 }
                ])
            }]
        });
}(window.app || (window.app = {})));



// (function (app) {
//     // app.MyRoutes=ng.router.RouteConfig([
//     //         { path: "/", component: app.View1 }
//     //     ])(app.MyRoutes);

//     // app.MyComponent = ng.router
//     // .RouteConfig([
//     //      { path: "/", component: app.View1 }
//     // ])
//     // .Class({
//     //     constructor: function() {}
//     // });

// }(window.app || (window.app = {})));



(function (app) {
    document.addEventListener("DOMContentLoaded", function () {
        ng.platformBrowserDynamic.bootstrap(app.MyRoutes);
    });
}(window.app || (window.app = {})));
