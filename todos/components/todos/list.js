(function(app) {
    app.Todos = app.Todos || (app.Todos = {});
    app.Todos.TodoList =
        ng.core.Component({
            selector: 'todo-list',
            pipes: [app.Pipes.SearchTodo, app.Pipes.StatusFilterTodo],
            inputs:["status", "term"],
            directives: [app.Todos.TodoItemComponent],
            providers:[app.Services.TodoService],
            templateUrl: '/todos/templates/todos/todo-list.html'
        })
            .Class({
                constructor: [app.Services.TodoService, function constructor(todoService) {
                    this.todoService = todoService;
                }]
            });
})(window.app || (window.app = {}));