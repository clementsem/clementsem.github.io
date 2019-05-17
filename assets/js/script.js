$(function(){
  // navbar smooth scroll
  $('.navbar a').on("click", function(event){
    event.preventDefault();
    var hash = this.hash;
    $('body,html').animate({scrollTop: $(hash).offset().top} , 750 , function(){window.location.hash = hash;});
  });

if ($(window).width() > 635) {
  $('.fa-github').mouseenter(function(){
    $(this).addClass('animated pulse faster');
  });
  $('.fa-github').mouseleave(function(){
    $(this).removeClass('animated pulse faster');
  });
}

if ($(window).width() > 635) {
  $('.fa-linkedin').mouseenter(function(){
    $(this).addClass('animated pulse faster');
  });
  $('.fa-linkedin').mouseleave(function(){
    $(this).removeClass('animated pulse faster');
  });
}

  // navbar fade & resize
  if ($(window).width() > 635) {
    $(window).scroll(function() {
      if($(this).scrollTop() > 70) {
        $('.navbar').addClass('opaque');
      } else {
        $('.navbar').removeClass('opaque');
      }
    });
  }
  else {
  }
  // on scroll timeline fade in
  if ($(window).width() > 635) {
    $(window).scroll(function() {
      if($(this).scrollTop() > 800) {
        $('.timeline-panel').addClass('animated fadeInUpBig');
      } else {
        $('.timeline-panel').removeClass('animated fadeInUpBig');
      }
    });
  } else {
  }
  // on scroll progress bar fade id
  if ($(window).width() > 635) {
    $(window).scroll(function() {
      if($(this).scrollTop() > 1800) {
        $('#comptech').addClass('animated fadeInLeftBig');
        $('#complang').addClass('animated fadeInRightBig');
      } else {
        $('#comptech').removeClass('animated fadeInLeftBig');
        $('#complang').removeClass('animated fadeInRightBig');
      }
    });
  } else {
  }
});
