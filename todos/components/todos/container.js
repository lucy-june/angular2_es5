(function(app) {
    app.Todos = app.Todos || (app.Todos = {});
    app.Todos.TodoComponent =
        ng.core.Component({
            selector: 'todo',
            directives: [app.Todos.TodoInput, app.Todos.TodoList, app.Filters.SearchTodo, app.Filters.StatusTodo],
            templateUrl: '/todos/templates/todos/todos.html'
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));