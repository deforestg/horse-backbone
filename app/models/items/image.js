var Image = Item.extend({

    defaults: function() {
        return {
            label: 'New Image',
            src: 'http://i.imgur.com/czjCVpk.jpg',
            id: this.cid
        };
    },

    addView: function() {
        return new ImageView({model: this});
    }

});
