var app = app || {};

$(function () {
    app.Router = new Router();
    app.AppView = new AppView();
    app.Items = new Items();
    Backbone.history.start();
});
