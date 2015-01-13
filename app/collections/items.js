var Items = Backbone.Collection.extend({

    model: Item,

    // sorted by insertion order
    comparator: 'order'

});
