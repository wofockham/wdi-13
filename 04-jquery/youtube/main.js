// Create an array of every link on the page using document.querySelectorAll(cssSelector)
  // Iterate through the array. In each iteration of the loop:
  // Find the current href using element.getAttribute(name), and store into a variable
  // Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
  // Create an IMG element using document.createElement(tagName)
  // Set the 'src' of the IMG element using element.setAttribute(name, value)
  // Append the IMG to the link using element.appendChild(element)

var linkTags = document.querySelectorAll('a'); // Created the array of links

for (var i = 0; i < linkTags.length; i++) { // We are iterating through them
  var link = linkTags[i]; // Store the current link
  var linkUrl = link.getAttribute('href'); // Get the current value of the href attribute
  var thumbnailUrl = youtube.generateThumbnailUrl( linkUrl ); // Use the library to generate a thumbnail
  var thumbnailImage = document.createElement('img'); // Created an image
  thumbnailImage.setAttribute('src', thumbnailUrl); // Set that image's src attribute
  link.appendChild(thumbnailImage); // Finally, put in on the page beneath the current link
}
