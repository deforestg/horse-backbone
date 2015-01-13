var Textbox = Item.extend({

    defaults: function() {
        return {
            label: 'New Textbox',
            text: '',
            id: this.cid
        };
    },

    addView: function() {
        return new TextboxView({model: this});
    }

});
