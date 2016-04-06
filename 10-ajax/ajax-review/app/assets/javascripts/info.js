$(document).ready(function () {
  $('#fetch-info').on('click', function () {
    $('#uptime').load('/uptime');
  });
});
