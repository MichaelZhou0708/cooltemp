/**
 * The script is encapsulated in an self-executing anonymous function,
 * to avoid conflicts with other libraries
 */
(function($) {


	/**
	 * Declare 'use strict' to the more restrictive code and a bit safer,
	 * sparing future problems
	 */
	"use strict";



	/***********************************************************************/
	/*****************************  $Content  ******************************/
	/**
	* + Content
	* + Collapse Icon
	* + Easy PaiChart
	* + Gelleriffic
	* + GMaps
	* + Go to Top
	* + Isotope
	* + Menu Animation
	* + Slider Range
	* + Sponsors
	* + Tooltips
	*/



	/***************************  $Collapse Icon  **************************/
	function changeIcon(e, icons){
		var $emt = $(e.target).parents('.panel'),
			$ico = $emt.find('h4 a i'),
			evt = e.type,
			isIn = ($emt.find('.panel-collapse').hasClass('in')),
			icoClosed = icons[0],	//icon when panel is close
			icoOpen   = icons[1],	//icon when panel is open
			icoHover  = icons[2];			//icon when panel is hover

		$ico.removeClass();
		
		if (evt == 'show'){ 				$ico.addClass(icoOpen);
		} else if (evt == 'hide'){ 			$ico.addClass(icoClosed);
		} else if (evt == 'mouseenter'){ 	$ico.addClass(icoHover);
		} else if (evt == 'mouseleave'){ 
			( isIn )? $ico.addClass(icoOpen) : $ico.addClass(icoClosed);
		}
	}

	function bindChangeIcon(collapse, heading, icons){
		collapse.on('hide.bs.collapse', function (e){ changeIcon(e, icons); });
		collapse.on('show.bs.collapse', function (e){ changeIcon(e, icons); });
		heading.on('mouseenter', function (e){ changeIcon(e, icons); });
		heading.on('mouseleave', function (e){ changeIcon(e, icons); });
	}


	var $collapse1 = $('#accordion'),
		$heading1 = $collapse1.find('.panel-heading'),
		icons1 = ['icon-up-open-mini', 'icon-down-open-mini', 'icon-plus'];
	
	bindChangeIcon($collapse1, $heading1, icons1);

	var $collapse2 = $('#accordion-work'),
		$heading2 = $collapse2.find('.panel-heading'),
		icons2 = ['icon-minus-squared', 'icon-plus-squared', 'icon-plus-squared'];
	
	bindChangeIcon($collapse2, $heading2, icons2);
	


	/*************************  Easy PaiChart  *****************************/
	if ($('.chart').length) {
		
		var size = 240;
		
		if($('html').width() < 778){ size = 175 }
		

		$('.chart').easyPieChart({
			animate: 2000,
			barColor: "#02b6eb",
			lineCap: "square",
			lineWidth: 8,
			scaleColor: false,
			size: size,
			trackColor: "#bfc8d1",
		});
	}



	/***************************  $Galleriffic  ****************************/
	if ($('#thumbs').length) { 
		var gallery = $('#thumbs').galleriffic({
			delay:                     2500, // in milliseconds
			numThumbs:                 5, // The number of thumbnails to show page
			enableTopPager:            false,
			enableBottomPager:         false,
			imageContainerSel:         '#slideshow', // The CSS selector for the element within which the main slideshow image should be rendered
			controlsContainerSel:      '#controls', // The CSS selector for the element within which the slideshow controls should be rendered
			autoStart:                 true,
		});

		gallery.find('a.prev').click(function(e) {
			gallery.previousPage();
			e.preventDefault();
		});

		gallery.find('a.next').click(function(e) {
			gallery.nextPage();
			e.preventDefault();
		});
	}



	/*****************************  $GMaps  ********************************/
	var map;
	if ($('#map').length) {
		map = new GMaps({ div: '#map', lat: 48.858093, lng: 2.294694  });
		map.addMarker({ lat: 48.858093, lng: 2.294694  });
	}
	if ($('#map2').length) {
		map = new GMaps({ div: '#map2', lat: 40.6894259, lng: -74.0442827  });
		map.addMarker({ lat: 40.6894259, lng: -74.0442827  });
	}
	if ($('#map3').length) {
		map = new GMaps({ div: '#map3', lat: 40.6894259, lng: -74.0442827  });
		map.addMarker({ lat: 40.6894259, lng: -74.0442827  });
	}
	if ($('#map-tab').length) {
		map = new GMaps({ div: '#map-tab', lat: 40.6894259, lng: -74.0442827  });
		map.addMarker({ lat: 40.6894259, lng: -74.0442827  });
	}
	if ($('#map4').length) {
		map = new GMaps({ div: '#map4', lat: 40.6894259, lng: -74.0442827  });
		map.addMarker({ lat: 40.6894259, lng: -74.0442827  });
	}

	if ($('#map-contact').length) {
		map = new GMaps({ div: '#map-contact', lat: 40.6894259, lng: -74.0442827  });
		map.addMarker({ lat: 40.6894259, lng: -74.0442827  });
	}



	/****************************  $Go to Top  *****************************/
	 $('.to-top').click(function(){
		 $("html, body").animate({ scrollTop: 0 }, 800);
		 return false;
	 });



	/*****************************  $Isotope  ******************************/
	function startIsotope(){
		// cache container
		var $container = $('.invest-grid');
		
		// initialize isotope
		if(jQuery().isotope) {
 			$container.isotope();
		}

		// filter items when filter link is clicked
		$('.filters a').click(function(e){
			e.preventDefault();
			
			if($(this).data('filter') == '*'){
				$('.filters a').removeClass('active');
				$(this).addClass('active');
			} else {
				$('.filters a[data-filter="*"]').removeClass('active');
				$(this).addClass('active');
			}
			
			refreshIsotope();
		});
		
		$('.filters a .close').click(function(e){
			e.preventDefault();
			e.stopPropagation();
			
			$(this).parent().removeClass('active');

			refreshIsotope();
		});


		function refreshIsotope() {
			var $filters = $('.filters a.active'),
				selectors = '';

			$filters.each(function( index ) {
				if (selectors != ''){selectors += ', '}
				selectors += $( this ).attr('data-filter');
			});

			$container.isotope({ filter: selectors });
		}
	}


	$(window).load( startIsotope() );



	/**************************  $Menu Animation  **************************/
	if ($(window).width() >= 768) {
		$('.dropdown').hover(function() {
			$(this)
					.find('.dropdown-menu')
					.first()
					.stop(true, true)
					.delay(100)
					.fadeIn()
					.slideDown('fast')
		}, function() {
			$(this)
					.find('.dropdown-menu')
					.first()
					.stop(true, true)
					.delay(250)
					.fadeOut()
					.slideUp('slow')
		});
	}



	/*************************** Slider Range  *****************************/
	function initSliderRange(element, pre, app, min, max, step, val, tooltip) {
		element.slider({
				range: true,
				min: min,
				max: max,
				value : val,
				step: step,
				tooltip: tooltip,
			})
			.on('slide', function(ev){
				$(this).parent().parent().find('.input_range.min').val(ev.value[0])
				$(this).parent().parent().find('.span_range.min').html(pre + ev.value[0] + app)

				$(this).parent().parent().find('.input_range.max').val(ev.value[1])
				$(this).parent().parent().find('.span_range.max').html(pre + ev.value[1] + app)
			});
	}


	if ($('#slider-price').length) { 
		initSliderRange(
			$('#slider-price .slider'),	//element
			'$ ',						//Preppend
			'',							//Append
			1000,						//Min
			150000,						//Max
			1000,						//Step
			[20000,90000],				//Value
			'hide'						//Tooltip
		) 
	}



	/*****************************  $Sponsors  *****************************/
	var owl = $("#owl-sponsors");

	owl.owlCarousel({
		items : 5, 
		itemsCustom: [
			[0,1], 		//1 items between 0px and 379px
			[380,2],	//2 items between 380px and 549px
			[550,3],	//3 items between 550px and 991px
			[992,5],	//5 items higher 992px
			[1200,5]
		],

		autoPlay: false,
		stopOnHover: true,
		navigation: true,
		pagination: false,
		navigationText: ["",""]
	});



	/*****************************  $Tootips  ******************************/
	function changeTooltipColorTo(color) {
		//solution from: http://stackoverflow.com/questions/12639708/modifying-twitter-bootstraps-tooltip-colors-based-on-position
		$('.tooltip-inner').css('background-color', color)
		$('.tooltip.top .tooltip-arrow').css('border-top-color', color);
		$('.tooltip.right .tooltip-arrow').css('border-right-color', color);
		$('.tooltip.left .tooltip-arrow').css('border-left-color', color);
		$('.tooltip.bottom .tooltip-arrow').css('border-bottom-color', color);
	}


	$('.social li a').tooltip({placement: 'bottom'})
	$('.social li a').hover(function() {changeTooltipColorTo('#07a8dc')});
	
	$('.invest-item .links a').tooltip({placement: 'top'})
	$('.invest-item .links a').hover(function() {changeTooltipColorTo('#07a8dc')});


})(jQuery);