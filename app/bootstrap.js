var app = app || {};

$(function() {
    app.Items = new Items();
    app.Router = new Router();
    app.AppView = new AppView();
    Backbone.history.start();
});
