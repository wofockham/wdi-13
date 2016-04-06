$(document).ready(function () {
  $('#fetch-lotto').on('click', function () {
    $('#lotto').load('/lotto');
  });
});
