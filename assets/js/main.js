$(document).ready(function () {
   const width = screen.width;
   console.log(width);
  
  $(this).scrollTop(0);
  const b = $("#burger");
  const b1 = $("#burger img:nth-child(1)");
  const b2 = $("#burger img:nth-child(2)");
  const b3 = $("#burger img:nth-child(3)");
  const b4 = $("#burger img:nth-child(4)");
  const b5 = $("#burger img:nth-child(5)");  
   const bimg = $("#burger img");
  b4.css({ "margin-bottom": "-7%"});
  b3.css({ "margin-bottom": "-5%"});
  b2.css({"margin-bottom": "-10%"});
  b1.css({"margin-bottom": "-15%"});
  $(".bg2").hide();

  $(window).scroll(function (event) {
    var width = screen.width;
    console.log(width);
    var scroll = $(window).scrollTop();
    var height = (scroll * 0.65) / 4;
    const h = (height/12) - 2 +'%';
    const h1 = (height / 12) + 3 + "%";

    console.log(height);


    //  Mobile View
     if (width < 768) {
       if (height > 0 && height <= 100) {
         b.css("transform", "translateY(" + height / 3.8 + "%)");   
       }
       if (height > 95 && height <= 430) {
         b.css({ background: "#fffbe7" });
       } 
      //  else {
      //    b.css({ background: "transparent" });
      //  }
       
       if (height > 360 && height <= 380) {
         $("#customize").addClass('show');
       } else{
         $("#customize").removeClass("show");
       }
       if (height > 270 && height <= 385) {
         b.css("transform", "translateY(" + (250 - height) / 3 + "%)");
       }
     } 
     if (width >= 768 && width <= 991) {
         if (height > 0 && height <= 100) {
           b.css("transform", "translate(" + -height / 1.425 + "%)");
         }
     } 


    //  Web View
     if (width > 991 && width <= 1600) {
       if (height > 0 && height <= 100) {
         b.css("transform", "translate(" + -height / 1.425 + "%)");         
       }
       if (height > 280 && height <= 380) {
         b.css("transform", "translateX(" + (180 - height) / 1.6 + "%)");
       }
     }


     if (height > 0 && height <= 100){
        b5.css({ "margin-top": h });
        b4.css({ "margin-top": h });
        b3.css({ "margin-top": h });
        b2.css({ "margin-top": h1 });
        // b1.css({ "margin-top": +(-height / 2) + 20 + "%",});
        $(".hero-img-bg").css({ opacity: 1 - height / 100 });
     }

    

    if (height > 180 && height <= 250) {
      var revHeight = height - 250;
      const rh = -revHeight / 15 +"%";
      console.log(revHeight);
      b5.css({"margin-top": rh });
      b4.css({"margin-top": rh });
      b3.css({"margin-top": rh });
      b2.css({ "margin-top": rh });
      // b1.css({"margin-top": +(revHeight / 2) + 10 + "%",});
      // b1.css({ "margin-bottom": + (-height / 2) + 10 + "%" });
    }
   

    if(height > 430){
     b.addClass('hide');
      $("#bg-burger").addClass("hide");
    }
   else {
     b.removeClass("hide");
      $("#bg-burger").removeClass("hide");
    }
    if (height > 280 && height <= 800) {
      var opacity1 = ((height - 280) * 1.6) / 100;
      $(".bg2").show();
      $("#bg2").css("opacity", +opacity1);
      $("#bg1").css("opacity", 1 - opacity1);
    } else {
      $(".bg2").hide();
    }
    
  });

  (function ($) {
    var $slides = $("section");
    var currentSlide = 0;
    var isAnimating = false;
    var stopAnimation = function () {
      setTimeout(function () {
        isAnimating = false;
      }, 300);
    };

    var bottomIsReached = function ($elem) {
      var rect = $elem[0].getBoundingClientRect();
      return rect.bottom <= $(window).height();
    };

    var topIsReached = function ($elem) {
      var rect = $elem[0].getBoundingClientRect();
      return rect.top >= 0;
    };

    document.addEventListener(
      "wheel",
      function (event) {
        var $currentSlide = $($slides[currentSlide]);

        if (isAnimating) {
          event.preventDefault();
          return;
        }

        var direction = -event.deltaY;

        if (direction < 0) {
          // next
          if (currentSlide + 1 >= $slides.length) return;
          if (!bottomIsReached($currentSlide)) return;
          event.preventDefault();
          currentSlide++;
          var $slide = $($slides[currentSlide]);
          var offsetTop = $slide.offset().top;
          isAnimating = true;
          $("html, body").animate(
            {
              scrollTop: offsetTop,
            },
            1000,
            stopAnimation
          );
        } else {
          // back
          if (currentSlide - 1 < 0) return;
          if (!topIsReached($currentSlide)) return;
          event.preventDefault();
          currentSlide--;
          var $slide = $($slides[currentSlide]);
          var offsetTop = $slide.offset().top;
          isAnimating = true;
          $("html, body").animate(
            {
              scrollTop: offsetTop,
            },
            1000,
            stopAnimation
          );
        }
      },
      { passive: false }
    );
  })(jQuery);
});
