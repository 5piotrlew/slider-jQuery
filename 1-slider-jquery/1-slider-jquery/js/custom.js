'use strict';

$(function(){
    console.log('hej');
    /*zmienne*/
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');
   
    var slideWidth = 100/slideCount;
    /*Szerokosc kontenera*/
    slideShow.css('width',slideCount * 100 + '%');
    console.log(slideCount);
    
    //sto procent podziel na ilosc slajdow i foreach szerokosc taka do signleslide
    
   // singleSlide.css('width', 100 / slideCount + '%');
    
    //szerokosc obrazka iczem na kazdy element razy indeks
    
        $('.single-slide').each(function (index) {
            $(this).css({'width': slideWidth + '%', 'margin-left': index * slideWidth + '%' });
            
        });
    
 
});