/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
var btn = $('.back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('back-to-top__show');
  } else {
    btn.removeClass('back-to-top__show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(function () {
    // Owl Carousel
    var owl = $(".expertise-carousel");
    owl.owlCarousel({
        items: 2,
        margin: 30,
        loop: true,
        dots: false,
        autoplay: true,
        nav: false,
        responsiveClass:true,
        responsive:{
          0:{
              items:1,
          },
          1000:{
              items:2,
          }
      }
    });

    $('.top-slider').owlCarousel({
      loop:true,
      nav:false,
      items: 1,
      autoplay: true,
    })

    document.getElementById('next-slide').addEventListener('click', function(){
      $('.expertise-carousel').trigger('next.owl.carousel');
   });
   
   document.getElementById('prev-slide').addEventListener('click', function(){
      $('.expertise-carousel').trigger('prev.owl.carousel');
   });

     //Go through each carousel on the page
    $('.owl-carousel').each(function() {
      //Find each set of dots in this carousel
    $(this).find('.owl-dot').each(function(index) {
      //Add one to index so it starts from 1
      $(this).attr('aria-label', index + 1);
    });
  });
});


