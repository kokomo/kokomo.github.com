(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js5').attr('src', (dpi>1) ? 'images/man-14-512-634.png' : 'images/man-14-512-317.png');
$('.js6').attr('src', (dpi>1) ? 'images/woman-9-512-634.png' : 'images/woman-9-512-317.png');
$('.js7').attr('src', (dpi>1) ? 'images/man-16-512-634.png' : 'images/man-16-512-317.png');
var a='data-src'; if($('.js .slide0').hasAttr('src')) { a='src'; } $('.js .slide0').attr(a, (dpi>1) ? 'images/man-14-512-702.png' : 'images/man-14-512-351.png');
var a='data-src'; if($('.js .slide1').hasAttr('src')) { a='src'; } $('.js .slide1').attr(a, (dpi>1) ? 'images/woman-9-512-702.png' : 'images/woman-9-512-351.png');
var a='data-src'; if($('.js .slide2').hasAttr('src')) { a='src'; } $('.js .slide2').attr(a, (dpi>1) ? 'images/man-16-512-702.png' : 'images/man-16-512-351.png');



var a='data-src'; if($('.js3 .slide0').hasAttr('src')) { a='src'; } $('.js3 .slide0').attr(a, (dpi>1) ? 'images/man-16-512-740.png' : 'images/man-16-512-370.png');
var a='data-src'; if($('.js3 .slide1').hasAttr('src')) { a='src'; } $('.js3 .slide1').attr(a, (dpi>1) ? 'images/man-14-512-740.png' : 'images/man-14-512-370.png');
var a='data-src'; if($('.js3 .slide2').hasAttr('src')) { a='src'; } $('.js3 .slide2').attr(a, (dpi>1) ? 'images/woman-9-512-740.png' : 'images/woman-9-512-370.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
initMenu($('#m2')[0]);
initMenu($('#m3')[0]);
initMenu($('#m4')[0]);
$('.js4 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: true,arrows: true,infinite: true});$('.s26').Stickyfill();
$('.js .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});$('.js2 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 400,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2400});$('.js3 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 500,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2300});
});