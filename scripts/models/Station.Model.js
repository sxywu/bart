define([
  "jquery",
  "underscore",
  "backbone",
  "d3"
], function(
  $,
  _,
  Backbone,
  d3
) {
  return Backbone.Model.extend({
    initialize: function() {
      var prettyName = this.get("name").replace("_", " ").replace("-", "/");
      this.set("prettyName", prettyName);

      this.temp();
    },
    // temporary function that randomly generates escalator/elevator/stair combinations
    temp: function() {
      var range = _.range(_.random(0, 4)),
        ees = [];
      _.each(range, function(i) {
        ees.push(_.random(0, 19));
      });
      this.set("ees", ees);
    }
  });
})