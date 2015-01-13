var AddTextboxView = EntryView.extend({

    template: _.template($('#add-textbox-template').html()),

    events: {
        click: 'addTextbox',
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

    addTextbox: function() {
        app.Items.add(new Textbox());
    }

});
