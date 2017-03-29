(function ($) {
 "use strict";
    
/*-----------------------------
	Menu Stick
---------------------------------*/
    if ($(".sticker")[0]){
        $('.sticker');
        $(window).scroll(function(){
            var wind_scr = $(window).scrollTop();
            var window_width = $(window).width();
            var head_w = $('.sticker').height();
            if (window_width >= 10) {
                if(wind_scr < 400){
                    if($('.sticker').data('stick') === true){
                        $('.sticker').data('stick', false);
                        $('.sticker').stop(true).animate({opacity : 0}, 300, function(){
                            $('.sticker').removeClass('stick slideDown');
                            $('.sticker').stop(true).animate({opacity : 1}, 300);
                        });
                    }
                } else {
                    if($('.sticker').data('stick') === false || typeof $('.sticker').data('stick') === 'undefined'){
                        $('.sticker').data('stick', true);
                        $('.sticker').stop(true).animate({opacity : 0},300,function(){
                            $('.sticker').addClass('stick slideDown');
                            $('.sticker.stick').stop(true).animate({opacity : 1}, 300);
                        });
                    }
                }
            }
        });
    };	
    
/*----------------------------
    jQuery MeanMenu
------------------------------ */
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });
	
/*----------------------------
    Wow js active
------------------------------ */
    new WOW().init();
 
/*--------------------------
    ScrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
    
    
/*--------------------------------
	Testimonial Slick Carousel
-----------------------------------*/
    $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
/*------------------------------------
	Testimonial Slick Carousel as Nav
--------------------------------------*/
    $('.testimonial-image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
              breakpoint: 450,
              settings: {
                dots: false,
                slidesToShow: 3,  
                centerPadding: '0px',
                }
            },
            {
              breakpoint: 420,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
                }
            }
        ]
    });
    
/*--------------------------------
	One Page Nav
-----------------------------------*/
    var top_offset = $('.main-menu').height() - -60;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });

/*--------------------------------
	Changing background images in the banenr
-----------------------------------*/


        // var opacity = 0.0;
        // if (step == 5)
        // {
        //     n = 5;
        //     step = 1;
        //     opacity = 1.0;
        //     $("#banner").animate({'opacity':opacity},2000);     
        //     $("#item_"+n).animate({'opacity': 0.0},2000);
        //     return;     
        // }
        // var n = step+1;
        // $("#item_"+step).animate({'opacity':opacity},2000);
        // $("#item_"+n).animate({'opacity':1.0},2000);
        // step = n;

        // step = step + 1;
        // if(step%2)
        // {
        //     $("#banner").animate({'opacity':0.0},1000);  
        //     $(".banner-area").css('background', "linear-gradient( rgba(45, 62, 80,  0.8), rgba(45, 62, 80, 0.8) ), url(img/banner-photo2.jpeg)"); 
        //     $("#banner").animate({'opacity':1.0},1000);  
        // }
        // else
        // {
        //     $("#banner").animate({'opacity':0.0},1000);  
        //  $(".banner-area").css('background', "linear-gradient( rgba(45, 62, 80,  0.8), rgba(45, 62, 80, 0.8) ), url(img/banner-photo3.jpeg)");  
        //  $("#banner").animate({'opacity':1.0},1000);  



        $("#yourButtonId2").click
        (function()
        {
            var name = $('#name').val();
            var email = $('#email').val();
            var message = $('#message').val();
            // console.log(name + email + message);
            // console.log("button pressed");
            emailjs.send("default_service","template_dYMGng2i",{from_name: name, email: email, message: message});

        }
        );
 
})(jQuery); 


