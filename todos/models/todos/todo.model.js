(function(app) {
    app.Todos = app.Todos || (app.Todos = {});
    app.Todos.TodoModel = function(title, status) {
        "use strict";
        this.title = title || '';
        this.status = status || 'started';
    }
})(window.app || (window.app = {}));
