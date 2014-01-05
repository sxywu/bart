define([
  "jquery",
  "underscore",
  "backbone",
  "d3",
  "text!app/templates/Table.Template.html"
], function(
  $,
  _,
  Backbone,
  d3,
  TableTemplate
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

        this.renderPlatform();
      }
    },
    renderPlatform: function() {
      var range = _.range(20);
      $("#platform").html(_.template(TableTemplate, {range: range, stations: this.model.stations}));
    }
  });
})