$(document).ready(function () {
  var loadInfo = function () {
    // $('#lotto').load('/lotto');
    // $('#brother').load('/brother');
    // $('#uptime').load('/uptime');
    // $('#fortune').load('/fortune');

    $.getJSON('/info').done(function (result) {
      $('#lotto').text(result.lotto.join(', '));
      $('#brother').text(result.brother);
      $('#uptime').text(result.uptime);
      $('#fortune').text(result.fortune);
    });
  };

  setInterval(loadInfo, 3000);
});
