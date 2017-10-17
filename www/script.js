$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var content = $(".mdl-layout__content");
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        content.stop().animate({ scrollTop: target.offset().top }, 1000);
        return false;
      }
    }
  });
  $("main").scroll(function() {
    console.log($(this).scrollTop());
    if ($(this).scrollTop() == 0) {
      $(".digamma-top-button").removeClass("shown");
    } else {
      $(".digamma-top-button").addClass("shown");
    }
  });
});
