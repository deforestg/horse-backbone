var AddImageView = EntryView.extend({

    template: _.template($('#add-image-template').html()),

    events: {
        click: 'addImage',
        update: 'update',
        remove: 'remove'
    },

    addImage: function() {
        app.Items.add(new Image());
    }

});
