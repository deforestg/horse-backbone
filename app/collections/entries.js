var Entries = Backbone.Collection.extend({

    model: Entry,

    // sorted by insertion order
    comparator: 'order'

});
