var AddImage = Entry.extend({

    defaults: {
        label: 'Add Image'
    },

    addView: function() {
        return new AddImageView({model: this});
    }

});
