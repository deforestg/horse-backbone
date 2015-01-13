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
        var view = item.addView();
        this.$el.find('.playground').append(view.render().$el);
    }

});
