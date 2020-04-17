$(document).ready(function ($) { 

$("#carousel-team").owlCarousel({
        items:3,
        loop:true,
        nav:true,
        center:true,
        margin: 50,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
         responsive:
        {
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

$("#brand").owlCarousel({
        items:3,
        loop:true,
        nav:true,
        center:true,
        margin: 50,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
         responsive:
        {
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

$('.owl-carousel').owlCarousel({
        items:3,
        loop:true,
        nav:true,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
         responsive:
        {
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});




        $(window).on('load', function() {
          $('#preloader').delay(450).fadeOut(); // will first fade out the loading animation 
          $('#preloader').delay(45050).fadeOut('slow'); // will fade out the white DIV that covers the website. 
          $('body').delay(45050).css({'overflow':'visible'});
        });