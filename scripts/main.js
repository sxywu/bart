require.config({
    baseUrl: "scripts/contrib/",
    paths: {
        "app": "..",
        "underscore": "underscore",
        "backbone": "backbone",
        "bootstrap": "bootstrap",
        "d3": "d3.v3",
        "d3.tip": "d3.tip",
        "mediator": "backbone-mediator"
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        bootstrap: {
            deps: ["jquery"]
        },
        "d3": {
            exports: "d3"
        },
        "d3.tip": {
            deps: ["d3"],
            exports: "d3.tip"
        },
        "mediator": {
            deps: ["underscore", "backbone"],
            exports: "mediator"
        }
    }
});

require([
    "jquery",
    "underscore",
    "backbone",
    "bootstrap",
    "d3",
    "d3.tip",
    "app/views/App.View"
], function(
    $,
    _,
    Backbone,
    bootstrap,
    d3,
    tip,
    AppView
) {
    var appView = new AppView();
    app = {};
    appView.render();
});