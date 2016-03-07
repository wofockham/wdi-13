var thumbnailify = function ($videoLink) {
  var linkUrl = $videoLink.attr('href');
  var thumbnailUrl = youtube.generateThumbnailUrl(linkUrl);
  var thumbnailImg = $('<img>');
  thumbnailImg.attr('src', thumbnailUrl);
  $videoLink.append(thumbnailImg);

  $videoLink.on('click', function (event) {
    event.preventDefault();
    var videoEmbed = $('<iframe>');
    videoEmbed.attr( 'src', youtube.generateEmbedUrl(linkUrl) );
    videoEmbed.attr( 'width', 500 );
    videoEmbed.attr( 'height', 400 );

    var $videoWatcher = $('#video-watcher');
    $videoWatcher.hide();
    $videoWatcher.html( videoEmbed );
    $videoWatcher.fadeIn(300);
  });
};


var $videoLinks = $('a');
for (var i = 0; i < $videoLinks.length; i++) {
  var $videoLink = $videoLinks.eq(i);
  thumbnailify($videoLink);
}
