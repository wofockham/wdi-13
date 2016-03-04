// Create an array of every link on the page using document.querySelectorAll(cssSelector)
  // Iterate through the array. In each iteration of the loop:
  // Find the current href using element.getAttribute(name), and store into a variable
  // Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
  // Create an IMG element using document.createElement(tagName)
  // Set the 'src' of the IMG element using element.setAttribute(name, value)
  // Append the IMG to the link using element.appendChild(element)


var $linkTags = $("a"); // Selected all "a" tags on the page

for (var i = 0; i < $linkTags.length; i++) { // Iterated through the a tags
  // var $link = $( $linkTags[i] );
  var $link = $linkTags.eq(i); // Used the eq method to select the current link with jQuery. Equivalent to line above

  var linkUrl = $link.attr("href"); // Used the attr method to get the current href
  var thumbnailUrl = youtube.generateThumbnailUrl( linkUrl );

  var $thumbnailImage = $("<img>").attr("src", thumbnailUrl); // Created an image and set the src to be thumbnailUrl

  $link.append( $thumbnailImage ); // Finally, we put it on the page
}
