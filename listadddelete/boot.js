(function(app) {
    // document.addEventListener('DOMContentLoaded', function() {
    //     ng.platform.browser.bootstrap(app.TodosComponent);
    // });
    document.addEventListener('DOMContentLoaded', function() {
         ng.platformBrowserDynamic.bootstrap(app.TodosComponent);
    });

})(window.app || (window.app = {}));