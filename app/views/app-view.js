var AppView = Backbone.View.extend({

    el: '#app',

    initialize: function() {
        app.Toolkit = new Toolkit();

        this.$el.append(
            new ToolkitView({model: app.Toolkit}).render().$el,
            new PlaygroundView().render().$el
        );

        app.Entries.add(new AddTextbox());
        app.Entries.add(new AddImage());

        this.render();
    }

});
