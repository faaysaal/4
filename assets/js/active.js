(function ($){
    "use strict";


     /**** Mean Menu Start ****/
     $('#mobile-menu-active').meanmenu({
      meanScreenWidth: "575",
      meanMenuContainer: '.responsive-menu',
      onePage: true,
    });
    /**** Mean Menu End ****/

  /**** Header Menu Start ****/

  //For Nav Menu
    function smoothScroll(){
      $('nav li > a').on('click', function(event){
        var target = $(this.getAttribute('href'));
        if(target.length){
          event.preventDefault();
          $('html, body').stop().animate({
            scrollTop: target.offset().top - 80
          }, 1000);
        }
      });
    }
    smoothScroll();

    //active Class style By jQuery
    $('ul.main-menu > li:first-child > a').addClass("active");

    //Menu Active Class
    $('ul.main-menu li a').on('click', function(){
      $('ul.main-menu li a').removeClass("active");
      $(this).addClass("active");
    });

     //Sticky Menu
     $(window) .on('scroll', function(){

      var scroll = $(window) .scrollTop();

      if(scroll < 235){
          $(".sticky") .removeClass("scroll-header");
      }else{
          $(".sticky") .addClass("scroll-header");
      }


  });


  /**** Header Menu End ****/

    
    //Data Background
    $("[data-background]").each(function(){
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });

   //Slider PopUp Activation
   $('.slider-popup').magnificPopup({

    //type: 'image'
    type: 'iframe'

      });


      //Carousel For Main Slider 
$('.slider-active').owlCarousel({
  autoplay:true,
  loop:true,
  nav:false,
  margin:30,
  //navText:[ '<i class="fa fa-long-arrow-alt-left"></i>' , '<i class="fa fa-long-arrow-alt-right"></i>'],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      768:{
          items:1
      },
      992:{
          items:1
      },
      1200:{
          items:1
      }
  }
});


    /*********** */  
       //For Isotop Menu Active Class
  $('.portfolio-menu li').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
});
    //Masonary
    var $grid = $('.grid').isotope({
      itemSelector : '.grid-item',
      parcenPosition: true,
      masonry :{
        // Use Outer Width Of Grid-Sizer For Column Width
        columnWidth : 1
        //columnWidth : 'grid-item'
      }

    });

    //Filter Items On Button Click (For Isotope Menu)

    $('.portfolio-menu li').on('click', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
  });
    
/*********** */

//Count Code
$('.counter-number').each(function() {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  },{
    duration:4000,
    easing: 'swing',
    step: function (now){
      $(this).text(Math.ceil(now));
    }
  });
});

//Carousel For Testimonial
$('.testimonial-active').owlCarousel({
  autoplay:false,
  loop:true,
  nav:true,
  margin:30,
  navText:[ '<i class="fa fa-long-arrow-alt-left"></i>' , '<i class="fa fa-long-arrow-alt-right"></i>'],
  responsive:{
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:3
      },
      992:{
          items:3
      },
      1200:{
          items:3
      }
  }
});

    
})(jQuery);