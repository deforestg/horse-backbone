var TextboxView = ItemView.extend({

    template: _.template($('#textbox-template').html()),

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
