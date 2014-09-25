/**---------------
** MAIN NAV
**---------------*/
var threshold = 600;
$('span.nav-btn').click(function(){
	$('ul.nav').slideToggle();
});
$(window).resize(function(){
	if($(window).width() > threshold) {
		$('ul.nav').removeAttr('style');
	}
});
/**---------------
** SECONDARY NAV
**---------------*/
$('.nav2-btn2').click(function(){
	$('.nav2').slideToggle(400, function(){
		$(this).toggleClass('nav2-expanded').css('display','');
	});
});