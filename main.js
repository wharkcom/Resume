$(document).ready(function() {

	//Menu Links
	$('.menuOption').click(function(){
		//$('.menuOption').removeClass('selected');
		//$(this).addClass('selected');

		href = $(this).attr('value');
		window.history.pushState(null, null, '?'+href);
		loadContent(href);
	});

	//Resume Section
	$('h2, h3').click(function() {
		$(this).next().toggleClass('hidden');
		$('.expandIndicator', this).toggleClass('hidden');
	});

	//Zombie Chase
	$('#restartZombies').click(function() {
		console.log('Clicked Restart');

		var pI = Processing.getInstanceById('zombieCanvas');
		pI.setup();
	});

	//Navigation
	$('nav ul li').click(function() {
		var section = $(this).attr('value');
		$('.wrapper').addClass('hidden');
		$('#'+section).next().removeClass('hidden');
		$('#'+section).next().children().removeClass('hidden');
	});
});

//Show correct resume section
function loadContent(href) {
	$('.menuOption').removeClass('selected');
	$('#'+href+'Menu').addClass('selected');

	$('.resumeSection').hide();
	$('#'+href).show();
}

//Return to right location using back button
$(window).bind("popstate", function() {
    link = location.href.replace(/^.*[\\/]/, ""); // get filename only
    loadContent(link.substring(1));
});