/**
 * Created by a548159 on 1/15/16.
 */
(function(app) {
    app.Filters = app.Filters || (app.Filters = {});
    app.Filters.SearchTodo =
        ng.core.Component({
            selector: 'search-filter',
            outputs:["search"],
            templateUrl: '/todos/templates/filters/search.html'
        })
            .Class({

                constructor: function constructor() {
                    "use strict";
                    this.search = new ng.core.EventEmitter();
                },

                ngOnInit: function ngOnInit() {
                    "use strict";
                    this.search.emit('');
                }


            });
})(window.app || (window.app = {}));