$(document).ready(function () {

  var searchFlickr = function (term) {
    var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
    $.getJSON(flickrURL, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: term,
      format: 'json'
    }).done(function (data) {
      for (var i = 0; i < data.photos.photo.length; i++) {
        var url = generateURL(data.photos.photo[i]);
        displayPhoto(url);
      }
    });
  };

  var displayPhoto = function (url) {
    var $img = $('<img>', {src: url});
    $img.appendTo('#results');
  };

  var generateURL = function (photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg'
    ].join('');
  };

  $('#search').on('submit', function (e) {
    e.preventDefault();

    var query = $('#query').val();

    $('#results').empty();

    searchFlickr(query);
  });

  $(window).on('scroll', function () {
    var pixelsFromBottom = $(document).height() - ($(window).scrollTop() + $(window).height());

    if (pixelsFromBottom < 500) {
      console.log('near the bottom, HINT: SEARCH FLICKR MORE HERE');
    }

  });

});
