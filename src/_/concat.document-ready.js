$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
var url=window.location.pathname;$('.basket-navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('button[data-btn="view-pass"]').on("click",function(){var t="password"==$('input[data-input="password"]').attr("type")?"text":"password",a="Показать пароль"==$(this).attr("title")?"Скрыть пароль":"Показать пароль";$(this).prop("title",a),$('input[data-input="password"]').prop("type",t),$(this).toggleClass("is--visible")});
$("img").addClass("img-responsive");
var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar__nav-dropdown-menu a[href="'+url+'"]').parent().addClass("is--active");
"use strict";$(function(){var s=$('[data-slider-slick="slick-header"]'),e="/wp-content/themes/azbn7theme",e="",t='<button type="button" class="btn-nav__item  is--nav  is--slick  is--prev"><span class="sr-only">Предыдущий слайд</span><svg class="icon-svg icon-owl-prev" role="img"><use xlink:href="'+e+'/img/svg/sprite.svg#owl-prev"></use></svg></button>',n='<button type="button" class="btn-nav__item  is--nav  is--slick  is--next"><span class="sr-only">Следующий слайд</span><svg class="icon-svg icon-owl-next" role="img"><use xlink:href="'+e+'/img/svg/sprite.svg#owl-next"></use></svg></button>';s.slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:4e3,prevArrow:t,nextArrow:n,fade:!0})});
$(".text__block table").addClass("table table-bordered"),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(".text__block .table.table-bordered").wrap('<div class="table-responsive"></div>');