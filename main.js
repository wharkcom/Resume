$(document).ready(function() {

	//Menu Links
	$('.menuOption').click(function(){
		$('.menuOption').removeClass('selected');
		$(this).addClass('selected');

		$('.resumeSection').hide();
		$('#'+$(this).attr('value')).show();
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
});



