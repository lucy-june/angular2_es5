(function (app) {

    app.HelloComponent = ng.core
        .Component({
            selector: "hello",
            providers: [ng.http.HTTP_PROVIDERS]
        })
        .View({
            template: "<p>{{ greeting }} world! {{ greetingFromJSON }}</p>"
        })
        .Class({
            constructor: [ng.http.Http, function Hello(http) {
                var vm = this;

                vm.greeting = "Hello";
                vm.greetingFromJSON = "n.a";

                activate();

                function activate() {
                    var rx = http.get("hellohttp/greetings.json").share();

                    rx.subscribe(function (res) {
                        var greetings = res.json();

                        vm.greetingFromJSON = greetings.hello;
                    });
                }
            }]
        });

    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic.bootstrap(app.HelloComponent);
    });
}(window.app || (window.app = {})));
