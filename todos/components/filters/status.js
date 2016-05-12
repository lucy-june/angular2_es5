/**
 * Created by a548159 on 1/15/16.
 */
(function(app) {
    app.Filters = app.Filters || (app.Filters = {});
    app.Filters.StatusTodo =
        ng.core.Component({
            selector: 'status-filter',
            outputs:["status"],
            templateUrl: '/todos/templates/filters/status.html'
        })
            .Class({

                constructor: function constructor() {
                    "use strict";
                    this.currentFilter = 'all';
                    this.status = new ng.core.EventEmitter();
                },

                ngOnInit: function ngOnInit() {
                    "use strict";
                    this.status.emit(this.currentFilter);
                },

                onFilterSelect: function onFilterSelect(filterType) {
                    "use strict";
                    this.currentFilter = filterType;
                    this.status.emit(this.currentFilter);
                }

            });
})(window.app || (window.app = {}));