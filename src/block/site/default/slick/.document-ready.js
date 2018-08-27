'use strict';
$(function() { 
	var header = $('[data-slider-slick="slick-header"]');	
	//var gallery = $('[data-slider-slick="slick-gallery"]');	
	//var catalog = $('[data-slider-slick="slick-catalog"]');	
	//var catalog_nav = $('[data-slider-slick="slick-catalog-nav"]');	
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
	//var CMS__TPL_PATH = '/esbvolga';  
	//var CMS__TPL_PATH = '';  
	//local
	var prevArrow = '<button type="button" class="btn-nav__item  is--nav  is--slick  is--prev"><span class="sr-only">Предыдущий слайд</span><svg class="icon-svg icon-owl-prev" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#owl-prev"></use></svg></button>';
	var nextArrow = '<button type="button" class="btn-nav__item  is--nav  is--slick  is--next"><span class="sr-only">Следующий слайд</span><svg class="icon-svg icon-owl-next" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#owl-next"></use></svg></button>';	
	
	header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		autoplay: true,
  		autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true
	});
	/*catalog.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		fade: true,
  		asNavFor: catalog_nav
	});
	catalog_nav.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		centerMode: true,
		focusOnSelect: true,
		vertical: true,
  		asNavFor: catalog,
  		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					vertical: true,
				}
		    },
		    {
				breakpoint: 1025,
				settings: {					
					slidesToShow: 2,
					slidesToScroll: 1,
					vertical: false,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					vertical: false,
				}
		    }
		]
	});
	gallery.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		//vertical: true,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 1400,
				settings: {
					//dots: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 1025,
				settings: {					
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					//dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});*/
}); 