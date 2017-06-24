'use strict';

$(function(){
    console.log('hej');
    /*zmienne*/
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');
    /*Szerokosc kontenera*/
    slideShow.css('width',slideCount * 100 + '%');
    console.log(slideCount);
    
    
    
});