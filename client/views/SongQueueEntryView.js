// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  model: SongModel,

  initialize: function () {
    this.on('click', this.dequeue);
  },

  render: function() {
    // var html = [
    //   '<li>',
    //   '(' + this.model.get('artist') + ')    ' + this.model.get('title'),
    //   '</li>'
    // ].join('');

    // this.$el.html(html);
    // return this.$el;
    return this.$el.html(this.template(this.model.attributes));

  }
});
