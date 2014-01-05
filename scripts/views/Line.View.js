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
  return Backbone.View.extend({
    initialize: function() {
      this.model = this.options.model;
      this.d3 = d3.select(this.el);
      this.clicked = false;
    },
    events: {
      "click": "click"
    },
    click: function() {
      d3.selectAll("text").style("display", "none");
      if (this.clicked) {
        d3.selectAll(".line").classed("fade", false);
        d3.selectAll(".point").classed("fade", false);
        this.clicked = false;        
      } else {
        d3.selectAll(".line").classed("fade", true);
        d3.selectAll(".point").classed("fade", true);
        this.model.highlight();
        this.d3.classed("fade", false);
        this.clicked = true;
      }
    }
  });
})