// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  

  model: SongModel,

  initialize: function () {
    this.on('click', this.dequeue);
  },

  render: function() {
    var html = [
      '<li>',
      '(' + this.model.get('artist') + ')    ' + this.model.get('title'),
      '</li>'
    ].join('');

    this.$el.html(html);
    return this.$el;
  }
});
