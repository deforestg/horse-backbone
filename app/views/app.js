var AppView = Backbone.View.extend({

    el: '#app',

    events: {
    },

    widgets: [],

    initialize: function() {
        this.ToolkitView = new ToolkitView({model: new Toolkit()});
        this.widgets.push(this.ToolkitView);
        this.render();
    },

    render: function() {
        for (var i = 0; i < this.widgets.length; i++) {
            this.widgets[i].render();
            this.$el.append(this.widgets[i].$el);
        }
    }
});
