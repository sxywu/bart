define([
  "jquery",
  "underscore",
  "backbone",
  "d3",
  "app/models/Line.Model"
], function(
  $,
  _,
  Backbone,
  d3,
  LineModel
) {
  return Backbone.Collection.extend({
    model: LineModel,
    fetch: function() {
      var that = this;
      d3.json("json/bart.json", function(json) {
        that.reset(json.lines);
      });
    }
  });
});