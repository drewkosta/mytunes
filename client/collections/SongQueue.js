// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('dequeue', this.remove);
    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function () {
      this.at(0).dequeue();
      if (this.length) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function () {
    this.at(0).play();
  }
});