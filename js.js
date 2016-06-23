$(window).scroll(function() {
				if ($(window).scrollTop() > 315) {
					$('.nav').addClass('stuck');
				} else {
					$('.nav').removeClass('stuck');
				}
			});
