'use strict';

//TODO: Remove when this is resolved: https://github.com/angular/angular/issues/3890
// window.assert= function () {return true;};

// (function ( app) {
//   document.addEventListener('DOMContentLoaded', function () {
//    //  ng.bootstrap(app.Main , [
//    //  ngRouter.routerInjectables,
//    //  ng.bind(ngRouter.LocationStrategy).toClass(ngRouter.HashLocationStrategy),
//    //  [ng.bind(ngHttp.ConnectionBackend).toClass(ngHttp.XHRBackend), ngHttp.BrowserXhr, ng.bind(ngHttp.RequestOptions).toClass(ngHttp.BaseRequestOptions), ng.bind(ngHttp.ResponseOptions).toClass(ngHttp.BaseResponseOptions), ngHttp.Http],
//    //  app.People
//    // ]);

//   	ng.platformBrowserDynamic.bootstrap(app.Main );
//   	ng.platformBrowserDynamic.bootstrap(app.Main );
//   	ng.platformBrowserDynamic.bootstrap(app.Main );
//  });
// })(window.app);

(function (app) {
    document.addEventListener("DOMContentLoaded", function () {
    	ng.platformBrowserDynamic.bootstrap(app.HomeComponent);
    	ng.platformBrowserDynamic.bootstrap(app.TestComponent);
        ng.platformBrowserDynamic.bootstrap(app.Main);
    });
}(window.app || (window.app = {})));