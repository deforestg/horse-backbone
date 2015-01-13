var AppView = Backbone.View.extend({

    el: '#app',

    events: {
    },

    initialize: function() {
        app.Toolkit = new Toolkit();
        this.$el.append(
            new ToolkitView({model: app.Toolkit}).render().$el,
            new PlaygroundView().render().$el
        );
        this.render();
    }

});
