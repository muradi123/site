
 function landscape(){
 	$('.zoomimage').hide('slow');
 	$('.zoomimage2').hide('slow');
 	$('.zoomimage3').hide('slow');
 	$('.zoomimage4').show('slow');
 	$('.zoomimage5').show('slow');
 	$('.zoomimage6').show('slow');
 	
 }



$( document ).ready(function() {


  $('.site-title').on("mouseenter", function() {

    $('.rototate-icon').css("border-right", "1.5px solid #C4E0F1");
    $('.rototate-icon').css("border-top", "1.5px solid #C4E0F1");
    

    
  }).on('mouseleave', function() {
    $('.rototate-icon').css("border-right", "1px solid #006CEB");
    $('.rototate-icon').css("border-top", "1px solid #006CEB");
    
  });


});
$('.fa-mobile-alt').on("mouseenter", function() {

   $( ".mobile" ).fadeIn( 450 );
    

    
  }).on('mouseleave', function() {
  $( ".mobile" ).fadeOut( 10);
    
  });

  $('.fa-tablet-alt').on("mouseenter", function() {

   $( ".Tablet" ).fadeIn( 450);
    

    
  }).on('mouseleave', function() {
  $( ".Tablet" ).fadeOut( 10)
    
  });

   $('.fa-desktop').on("mouseenter", function() {

   $( ".Desktop" ).fadeIn( 450 );
    

    
  }).on('mouseleave', function() {
  $( ".Desktop" ).fadeOut( 10);
    
  });









$(document).ready(function(){
  $("#price").click(function(){
    $("#block").slideToggle("1000");
 
     $( "#block" ).animate({
     padding:"15px",
     fontSize: "1.1em",
     margin:"18px 55%",
    height: "200px"
  }, 100 );
  });
});


function ext(){
 	$('.zoomimage').show('slow');
 	$('.zoomimage2').show('slow');
 	$('.zoomimage3').show('slow');
 	$('.zoomimage4').hide('slow');
 	$('.zoomimage5').hide('slow');
 	$('.zoomimage6').hide('slow');
 	
 }
function showall(){
 	$('.zoomimage').show('slow');
 	$('.zoomimage2').show('slow');
 	$('.zoomimage3').show('slow');
 	$('.zoomimage4').show('slow');
 	$('.zoomimage5').show('slow');
 	$('.zoomimage6').show('slow');
 	
 }

function test(){
 	$('.zoomimage').show('slow');
 	$('.zoomimage2').hide('slow');
 	$('.zoomimage3').hide('slow');
 	$('.zoomimage4').hide('slow');
 	$('.zoomimage5').hide('slow');
 	$('.zoomimage6').hide('slow');
 	
 }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("main-title").style.opacity = "1";
  } else {
    document.getElementById("main-title").style.opacity = "0.8";
  }
}


$('.ml13').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: function(el, i) {
      return 300 + 30 * i;
    }
  }).add({
    targets: '.ml13 .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1000,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  });
  $('.one').click (function(){
 
  $( "#image1" ).fadeIn( "slow");
  $( "#image3" ).fadeOut( 10);
  $( "#image2" ).fadeOut( 10);
 $('.first').css("display", "block");
 $('.second').css("display", "none");
 $('.third').css("display", "none");

});
$('.two').click (function(){
 
  $( "#image2" ).fadeIn("slow");
  $( "#image1" ).fadeOut( 10);
  $( "#image3" ).fadeOut( 10);
  $('.second').css("display", "block");
  $('.first').css("display", "none");
   $('.third').css("display", "none");


});
$('.three').click (function(){
 
  $( "#image3" ).fadeIn("slow");
  $( "#image1" ).fadeOut( 10);
  $( "#image2" ).fadeOut( 10);
   $('.second').css("display", "none");
  $('.first').css("display", "none");
   $('.third').css("display", "block");

});






 jQuery(document).ready(function($) {

  var visible = false;
  //Check to see if the window is top if not then display button
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (!visible && scrollTop > 100) {
      $(".scrollToTop").fadeIn();
      visible = true;
    } else if (visible && scrollTop <= 100) {
      $(".scrollToTop").fadeOut();
      visible = false;
    }
  });

  //Click event to scroll to top
  $(".scrollToTop").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
    return false;
  });

});


let clicks = 0;

function hide() {
    clicks ++;
    if (clicks == 1) {
     $( "header" ).slideUp('slow');
 $( "#main-title" ).animate({ "top": "-60px" }, "slow" );
 
    };
     
 
  };


  $(".about").click(function() {
    $('html,body').animate({
        scrollTop: $(".wood").offset().top},
        2000);
});








