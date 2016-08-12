'use strict';

$(function () {
	
	//configuration
	var width = 720;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;

	//cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	var $desc = $('#desc');

	var interval;

	//setInterval
	function startSlider(){
		interval = setInterval(function() {
			//animate margin-left
			$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
				//add 1 to the current slide
				currentSlide++;
				//if its last slide go to position 1
				if (currentSlide === $slides.length) {
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}

	function stopSlider() {
		clearInterval(interval);
		$desc.text('Slider is now paused!')

	}
		//listen for mouseenter and pause
		$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
		
		//resume on mouseleave
		startSlider();

		//set desc text back to something else
    	$desc.on('mouseleave', function () {

        	$desc.text('Slider is now resuming. Hover your mouse over the slide to pause again!');

    });
})

