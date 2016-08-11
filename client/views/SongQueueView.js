// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  collection: SongQueue,

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    var html = [
      '<ul>',
      '</ul>'
    ].join('');

    this.$el.html(html);

    this.$el.append(this.collection.map(function(item) {
      var li = new SongQueueEntryView({model: item});
      return li.render();
    }));

    return this.$el;
  }

});
