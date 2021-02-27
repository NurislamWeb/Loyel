// HOME SLIDER OWL-CAROUSEL
$('.home-slider .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
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




// PRODCUT LIST AREA OWL-CAROUSEL
$('.product-list-area .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:2
        },
        400:{
            items:3
        },
        600:{
            items:4
        },
        800:{
            items:5
        },
        1000:{
            items:6
        },
        1200:{
            items:7
        },
        1400:{
            items:8
        },
        1600:{
            items:9
        },
        1800:{
            items:10
        }
    }
});

//**************PRODCUT LIST AREA OWL-CAROUSEL ***************







//***********************nur js start ****************************





//***************** header sticky js start ************************

// fixed menu js
$(window).scroll(function(){
  $scrollamount = $(window).scrollTop();
  
  if($scrollamount>500){
    $(".menu").addClass("fixed");
  }else{
    $(".menu").removeClass("fixed");
  }

  // if($scrollamount>1000){
  //   $(".btop").fadeIn();
  // }else{
  //   $(".btop").fadeOut();
  // }

  if($scrollamount>1000){
    $(".btop").css("visibility","visible");
  }else{
    $(".btop").css("visibility","hidden");
  }
})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})


//***************** header sticky js end **************************












































