define([
  "jquery",
  "underscore",
  "backbone",
  "d3"
  // "app/collections/Stations.Collection"
], function(
  $,
  _,
  Backbone,
  d3
  // StationsCollection
) {
  return Backbone.Model.extend({
    initialize: function() {
      this.setStations();
    },
    setStations: function() {
      var stations = _.map(this.get("stations"), function(station) {
        return app.stations.get(station);
      });
      if (!this.stations) {
        this.stations = new Backbone.Collection();
      }
      this.stations.reset(stations);
    },
    highlight: function() {
      this.stations.each(function(model) {
        model.view.highlight();
      });
    },
    unhighlight: function() {
      this.stations.each(function(model) {
        model.view.mouseleave();
      });
    }
  });
})