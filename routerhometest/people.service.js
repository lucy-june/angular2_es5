'use stict';

(function (app) {

app.People = ng.core.Class({
	constructor: [ng.http.Http, function (http) {
		this.http = http;
	}],
	getPeople: function () {
		var rx = this.http.get("routerhometest/people.json").share();

                    // rx.subscribe(function (res) {
                    //     var greetings = res.json();

                    //     vm.greetingFromJSON = greetings.hello;
                    // });
		
		return rx;
		// return this.http.get('people.json').toRx().map(function (res) {
		// 	console.log("2222222222")
		// 	console.log(res);
		// 	return res.json();
		// });
	}
});

})(window.app);


console.log("333333333333333333")