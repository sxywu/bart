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
  var padding = 5;
  return Backbone.View.extend({
    initialize: function() {
      this.model = this.options.model;
      this.d3 = d3.select(this.el);
      
      this.renderText();
    },
    renderText: function() {
      var that = this;
      this.text = d3.select("g#bart_text")
        .append("text")
        .attr("x", function() {
          if (that.d3.attr("cx")) {
            return parseInt(that.d3.attr("cx")) + 2 * padding;
          } else {
            return parseInt(that.d3.attr("d").split(",")[0].split("M")[1]) + padding;
          }
        }).attr("y", function() {
          if (that.d3.attr("cy")) {
            return parseInt(that.d3.attr("cy")) + padding;
          } else {
            return parseInt(that.d3.attr("d").split(",")[1].split("c")[0]) + padding;
          }
        })
        .style("display", "none")
        .text(this.model.get("prettyName"));
      this.d3.attr("stroke", "#333")
        .attr("fill", "#fff")
        .attr("opacity", 1)
        .attr("stroke-width", 1);
    },
    events: {
      "mouseover": "mouseover",
      "mouseleave": "mouseleave"
    },
    mouseover: function() {
      this.text.style("display", "inline");
    },
    mouseleave: function() {
      this.text.style("display", "none");
    },
    highlight: function() {
      this.d3.classed("fade", false);
      this.mouseover();
    }
  });
})