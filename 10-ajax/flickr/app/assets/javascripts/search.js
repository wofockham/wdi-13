$(document).ready(function () {

  var currentPage = 1;
  var endOfResults = false; // We won't ask Flickr for results they don't have.
  var query; // This stores the most recent search term.

  var searchFlickr = function (term) {
    if (endOfResults) {
      return;
    }

    var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
    $.getJSON(flickrURL, {
      // You can find additional params to add here in the docs
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: term,
      page: currentPage++,
      format: 'json'
    }).done(function (data) {
      if (data.photos.page === data.photos.pages) {
        endOfResults = true; // We've reached the last page.
      }
      for (var i = 0; i < data.photos.photo.length; i++) {
        var url = generateURL(data.photos.photo[i]);
        displayPhoto(url);
      }
    });
  };

  // We won't harass Flickr for new images more than once a second.
  var debouncedSearchFlickr = _.debounce(searchFlickr, 1000, true);

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
      '_q.jpg' // Different codes here select different image sizes
    ].join('');
  };

  $('#search').on('submit', function (e) {
    e.preventDefault();

    $('#results').empty(); // Remove the previous search results.
    // Reset out globals.
    currentPage = 1;
    endOfResults = false;
    query = $('#query').val();
    searchFlickr(query);

  });

  $(window).on('scroll', function () {
    var pixelsFromBottom =
      $(document).height() -
      ( $(window).scrollTop() + $(window).height() );

    var fetchThreshold = 500;

    if (pixelsFromBottom < fetchThreshold) {
      debouncedSearchFlickr(query);
    }

  });

});