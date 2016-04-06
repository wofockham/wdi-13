$(document).ready(function () {
  $('#fetch-fortune').on('click', function () {
    $('#fortune').load('/fortune');
  });
});
