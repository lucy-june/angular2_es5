(function(app) {
    app.Services = app.Services || (app.Services = {});
    app.Services.TodoService =
        ng.core.Injectable(

        )
            .Class({

                constructor: function constructor() {
                    "use strict";
                    this.todos = [
                        new app.Todos.TodoModel('eat'),
                        new app.Todos.TodoModel('sleep'),
                        new app.Todos.TodoModel('code')
                    ];
                },

                addTodo: function addTodo(todo){
                    this.todos = this.todos.concat([todo]);
                },

                toggleTodo: function toggleTodo(todo) {
                    var i = this.todos.indexOf(todo);
                    var status = todo.status === 'started' ? 'completed' : 'started';
                    var toggledTodo = Object.assign({}, todo, { status: status });
                    this.todos = this.todos.slice(0, i).concat([
                        toggledTodo
                    ], this.todos.slice(i + 1));
                }
            });
})(window.app || (window.app = {}));