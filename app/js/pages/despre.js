'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Despre',
  template: templates.pages.despre,
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
