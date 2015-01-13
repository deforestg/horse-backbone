var ToolkitView = Backbone.View.extend({

    template: _.template($('#toolkit-template').html()),

    events: {
        update: 'update',
        remove: 'remove'
    },

    initialize: function() {
        this.listenTo(app.Entries, 'add', this.addEntry);
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    addEntry: function(entry) {
        this.$el.append(entry.addView().render().$el);
    }

});
