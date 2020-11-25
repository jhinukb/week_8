jQuery(function() {
	let my_switch = false;

	$("button.download").hover(function () {
		$(this).removeClass('download').addClass('btn-hover');
		$('.apple').attr('src', 'images/apple_black.png');//stuff to do on mouse enter
	},
	function () {
		$(this).removeClass('btn-hover').addClass('download');
		$('.apple').attr('src', 'images/apple_white.png');
		}); //stuff to do on mouse leave
	});
