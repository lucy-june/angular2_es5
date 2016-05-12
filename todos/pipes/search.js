(function(app) {
    app.Pipes = app.Pipes || (app.Pipes = {});
    app.Pipes.SearchTodo =
        ng.core.Pipe({
            name: 'search'
        })
            .Class({
                constructor: function constructor() {},

                transform: function transform(value, args) {
                    var term = args?args :'';
                    return value.filter(function(item) {
                        return item.title.indexOf(term) === 0;
                    });
                }
            });
})(window.app || (window.app = {}));