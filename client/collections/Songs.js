// Songs.js - Defines a backbone collection class for songs.

var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    var coll = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      success: function (data) {
        console.log(data);
        data.results.forEach(function (song) {
          coll.add(new SongModel(song));
        });
      },
      error: function (err) {
        console.log(err);
      }
    });
  },

});