var ToolkitView = Backbone.View.extend({

    template: _.template($('#toolkit-template').html()),

    events: {
        update: 'update',
        remove: 'remove'
    },

    entries: {
        AddTextbox: new AddTextbox()
    },

    initialize: function() {
        this.AddTextboxView = new AddTextboxView({model: this.entries.AddTextbox});
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        this.AddTextboxView.render();
        this.$el.find('ul').append(this.AddTextboxView.$el);
        return this;
    },

    remove: function() {
        this.$el.remove();
    }
});
