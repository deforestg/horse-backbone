var AppView = Backbone.View.extend({

    el: '#app',

    events: {
    },

    widgets: [],

    initialize: function() {
        app.Toolkit = new Toolkit();
        this.widgets.push(new ToolkitView({model: app.Toolkit}));
        this.widgets.push(new PlaygroundView());
        this.render();
    },

    render: function() {
        for (var i = 0; i < this.widgets.length; i++) {
            this.widgets[i].render();
            this.$el.append(this.widgets[i].$el);
        }
    }
});
