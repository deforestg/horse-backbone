var PlaygroundView = Backbone.View.extend({

    template: _.template($('#playground-template').html()),

    initialize: function() {
        this.listenTo(app.Items, 'add', this.addItem);
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    },

    addItem: function(item) {
        this.$el.find('.playground').append(item.addView().render().$el);
    }

});
