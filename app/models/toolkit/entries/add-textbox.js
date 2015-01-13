var AddTextbox = Entry.extend({

    defaults: {
        label: 'Add Textbox'
    },

    addView: function() {
        return new AddTextboxView({model: this});
    }

});
