var carouselWidth = $("#carousel-relav .carousel-inner")[0].scrollWidth;
var cardWidth = $("#carousel-relav .carousel-item").width();
var scrollPosition = 0;

$("#carousel-relav .carousel-control-next").on("click", function () {
    if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
      scrollPosition += cardWidth;  //update scroll position
      $("#carousel-relav .carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
    }
  });

  $("#carousel-relav .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carousel-relav .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });

  var multipleCardCarousel = document.querySelector(
    "#carousel-relav"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    //rest of the code
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }