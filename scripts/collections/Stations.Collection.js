define([
  "jquery",
  "underscore",
  "backbone",
  "d3",
  "app/models/Station.Model"
], function(
  $,
  _,
  Backbone,
  d3,
  StationModel
) {
  return Backbone.Collection.extend({
    model: StationModel,
    fetch: function() {
      var that = this;
      d3.json("json/bart.json", function(json) {
        var stations = _.chain(json.lines)
          .pluck("stations").flatten().uniq()
          .map(function(station) {
            return {id: station, name: station};
          }).value();

        that.reset(stations);
      });
    }
  });
})