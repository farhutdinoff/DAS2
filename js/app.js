
$('.owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    nav: false,
    responsive:{
        0:{
            items:1
        }
    }
})
$('.owl-carousel-3').owlCarousel({
    loop:true,
    margin:30,
    responsive:{
        0:{
            dots:true,
            items:1
        },
        800:{
            nav: true,
            items:3,
            dots:false
        }
    }
})
$('.owl-carousel-4').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:4
        }
    }
})

$('.owl-carousel-6').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:6,
            nav:true
        }
    }
})
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.tooltiptext1').tooltip('show')

$('.video').parent().click(function () {

  if($(this).children(".video").get(0).paused){
 $(this).children(".video").get(0).play();
$(this).children(".play-button").fadeOut();

    }else{
 $(this).children(".video").get(0).pause();

  $(this).children(".play-button").fadeIn();

    }

});


$('.tooltipbtn1').on('click', function(){
$('.tooltiptext1').tooltip('show');
$('.tooltiptext2').tooltip('hide');
$('.tooltiptext3').tooltip('hide');
$('.tooltiptext4').tooltip('hide');
$('.tooltiptext5').tooltip('hide');
});
$('.tooltipbtn2').click('click', function(){
$('.tooltiptext2').tooltip('show');
$('.tooltiptext1').tooltip('hide');
$('.tooltiptext3').tooltip('hide');
$('.tooltiptext4').tooltip('hide');
$('.tooltiptext5').tooltip('hide');
});
$('.tooltipbtn3').click('click', function(){
$('.tooltiptext3').tooltip('show');
$('.tooltiptext2').tooltip('hide');
$('.tooltiptext1').tooltip('hide');
$('.tooltiptext4').tooltip('hide');
$('.tooltiptext5').tooltip('hide');
});
$('.tooltipbtn4').click('click', function(){
$('.tooltiptext4').tooltip('show');
$('.tooltiptext2').tooltip('hide');
$('.tooltiptext3').tooltip('hide');
$('.tooltiptext1').tooltip('hide');
$('.tooltiptext5').tooltip('hide');
});
$('.tooltipbtn5').click('click', function(){
$('.tooltiptext5').tooltip('show');
$('.tooltiptext2').tooltip('hide');
$('.tooltiptext3').tooltip('hide');
$('.tooltiptext4').tooltip('hide');
$('.tooltiptext1').tooltip('hide');
});


$('#menuToggle').click( function(){
   $('.header-mobile__nav').toggleClass("active");
   $('body').toggleClass("overflow-hidden");
 });
