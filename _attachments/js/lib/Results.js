// Generated by CoffeeScript 1.6.3
(function() {
  this.Results = Backbone.Collection.extend({
    model: Result,
    url: "/result",
    db: {
      view: "resultsByAssessmentId"
    }
  });

}).call(this);
