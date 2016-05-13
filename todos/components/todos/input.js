/**
 * Created by a548159 on 1/15/16.
 */
(function (app) {
    app.Todos = app.Todos || (app.Todos = {});
    app.Todos.TodoInput =
        ng.core.Component({
            selector: 'todo-input',
            providers:[app.Services.TodoService],
            templateUrl: '/todos/templates/todos/todo-input.html'
        })
            .Class({
                constructor: [app.Services.TodoService, function constructor(todoService) {
                    this.todoService = todoService;
                    this.todoModel = new app.Todos.TodoModel();
                }],
                onSubmit: function onSubmit()
                {
                    this.todoService.addTodo(this.todoModel);
                    this.todoModel = new app.Todos.TodoModel();
                }
        })
})
(window.app || (window.app = {}));