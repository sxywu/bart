define([
  "jquery",
  "underscore",
  "backbone",
  "d3",
  "app/collections/Stations.Collection",
  "app/collections/Lines.Collection",
  "app/views/Line.View",
  "app/views/Station.View"
], function(
  $,
  _,
  Backbone,
  d3,
  StationsCollection,
  LinesCollection,
  LineView,
  StationView
) {
  return Backbone.View.extend({
    initialize: function() {
      this.d3 = {};
      this.d3.svg = d3.select("svg#bart");
      this.$svg = $("svg#bart");

      var that = this;
      this.stationsCollection = new StationsCollection();
      this.linesCollection = new LinesCollection();
      this.stationsCollection.on("reset", function(collection) {
        app.stations = collection;
        that.renderStations();
        that.linesCollection.fetch();
      });
      this.linesCollection.on("reset", _.bind(this.renderLines, this));
    },
    render: function() {
      this.stationsCollection.fetch();
    },
    renderStations: function() {
      this.stationsCollection.each(function(model) {
        var view = new StationView({
          model: model,
          el: $("#" + model.get("name"))
        });
        model.view = view;
      });
    },
    renderLines: function() {
      this.linesCollection.each(function(model) {
        var view = new LineView({
          model: model,
          el: $(".line#" + model.get("name"))
        });
        model.view = view;
      });
    }
  });
})