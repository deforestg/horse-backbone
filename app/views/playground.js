var PlaygroundView = Backbone.View.extend({
    events: {
    },

    items: [],

    initialize: function() {
    },

    render: function() {
        for (var i = 0; i < this.widgets.length; i++) {
            this.items[i].render();
            this.$el.append(this.widgets[i].$el);
        }
    },

    addItem: function(item) {
        this.items[i].push(item);
    }
});
