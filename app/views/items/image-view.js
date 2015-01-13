var ImageView = ItemView.extend({

    template: _.template($('#image-template').html()),

    events: {
        'click .delete': 'clear'
    },

    clear: function() {
        try {
            this.model.destroy();
        } catch (e) {   // because not hooked up to backend
            this.remove();
        }
    }

});
