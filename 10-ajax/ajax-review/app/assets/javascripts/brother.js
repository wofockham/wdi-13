$(document).ready(function () {
  $('#fetch-brother').on('click', function () {
    $('#brother').load('/brother');
  });
});
