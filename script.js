$(window).scroll(function() {
    var element = $(".animation-element");
    var position = element[0].getBoundingClientRect();
  
    // If element is partially visible in the viewport
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.addClass("animated");
    }
  });
  