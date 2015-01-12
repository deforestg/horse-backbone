var ToolkitView = Backbone.View.extend({

    tagName: 'ul',

    template: _.template($('#toolkit-template').html()),

    events: {
        update: 'update',
        remove: 'remove'
    },

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    update: function() {
    },

    remove: function() {
    }
});
