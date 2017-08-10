var $nav = $('#header-nav');
var $moreBtn = $nav.find('.more-btn');

$moreBtn.on('click', function() {

  $(this).prev().toggleClass('open');
  $(this).content('Close')

});