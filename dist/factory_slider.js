"use strict";
/*
  Kreirao: Kristijan Kučina
*/

var $; //nakon učitavanja i parsiranja HTML dokumenta

$(document).ready(function () {
  //klik na lijevu tipku
  $('.left').click(function () {
    var flagAnimationOn = $(':animated').length;

    if (!flagAnimationOn) {
      $('.image-wrapper1 > div:first-child').fadeOut(1000, function () {
        $('.image-wrapper1').append($('.image-wrapper1 > div:first-child'));
        $('.image-wrapper1 > div:last-child').fadeIn("slow");
      });
      $('.image-wrapper2 > div:first-child').fadeOut(1000, function () {
        $('.image-wrapper2').append($('.image-wrapper2 > div:first-child'));
        $('.image-wrapper2 > div:last-child').fadeIn("slow");
      });
    } else {
      $('.left').prop('disabled', true);
    }

    $('.left').prop('disabled', false);
  }); //klik na desnu tipku

  $('.right').click(function () {
    var flagAnimationOn = $(':animated').length;

    if (!flagAnimationOn) {
      $('.image-wrapper1 > div:last-child').fadeOut(1000, function () {
        $('.image-wrapper1').prepend($('.image-wrapper1 > div:last-child'));
        $('.image-wrapper1 > div:first-child').fadeIn("slow");
      });
      $('.image-wrapper2 > div:last-child').fadeOut(1000, function () {
        $('.image-wrapper2').prepend($('.image-wrapper2 > div:last-child'));
        $('.image-wrapper2 > div:first-child').fadeIn("slow");
      });
    } else {
      $('.right').prop('disabled', true);
    }

    $('.right').prop('disabled', false);
  });
});
//# sourceMappingURL=factory_slider.js.map