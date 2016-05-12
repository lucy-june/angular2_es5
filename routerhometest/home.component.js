'use stict';

(function (app) {

app.HomeComponent = ng.core.Component({
	providers: [ng.http.HTTP_PROVIDERS, app.People]
}).
View({
	template: '<div>Hello {{name}}!</div>',
}).
Class({
	constructor: [app.People ,function (people) {

		console.log("dddd");

	  people.getPeople().subscribe(function (data) {
			this.name = data.name;
		}.bind(this));
	}]
});

})(window.app);