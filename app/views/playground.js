var PlaygroundView = Backbone.View.extend({

    events: {
    },

    items: [],

    initialize: function() {
        this.listenTo(app.Items, 'add', this.addItem);
    },

    render: function() {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].render();
            this.$el.append(this.items[i].$el);
        }
    },

    addItem: function(item) {
        this.items[i].push(item);
    }
});
