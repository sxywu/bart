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
    }
  });
})