/**
 * Created by a548159 on 1/15/16.
 */
(function(app) {
    app.Todos = app.Todos || (app.Todos = {});
    app.Todos.TodoItemComponent =
        ng.core.Component({
            selector: 'todo-item-renderer',
            inputs:["todo"],
            outputs:["toggle"],
            templateUrl: '/todos/templates/todos/todo-item-renderer.html'
        })
            .Class({
                constructor: function() {
                    "use strict";
                    this.toggle = new ng.core.EventEmitter();
                }

            });
})(window.app || (window.app = {}));