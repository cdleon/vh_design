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
/**------------------
** Periodicos mobile
**------------------*/
$('.p-mobile').click(function(){
	$('.menu-periodicos-mobile').slideToggle(400, function(){
		$(this).toggleClass('nav2-expanded').css('display','');
	});
});
$('.pHeader-mobile').click(function(){
	$(this).next().slideToggle(300, function(){
		$(this).next().toggleClass('nav2-expanded').css('display','');
	});
});
$(window).resize(function(){
	if($(window).width() > threshold) {
		if ($('.menu-periodicos-mobile').hasClass('nav2-expanded')) {
			$('.menu-periodicos-mobile').removeClass('nav2-expanded');
		};
		if ($('.menu-periodicos-mobile').is(":visible")) {
			$('.menu-periodicos-mobile').css('display','none');
		};
	}
});