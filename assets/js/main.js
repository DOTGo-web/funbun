$(document).ready(function () {
  $(this).scrollTop(0);
  $("#burger img:nth-child(4)").css({ "margin-bottom": "-7%", "z-index": "4" });
  $("#burger img:nth-child(3)").css({ "margin-bottom": "-5%", "z-index": "5" });
  $("#burger img:nth-child(2)").css({ "margin-bottom": "-10%", "z-index": "6", });
  $("#burger img:nth-child(1)").css({ "margin-bottom": "-15%",  "z-index": "5", });
  $(".bg2").hide();  

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var height = (scroll * 0.65) / 4;


    console.log(height);
   if (height > 125 && height <= 130){
     setTimeout(function () {      
       $("body").addClass("overflow"); 
       console.log("prevent");
     }, 2000);

     setTimeout(function () {
        $("body").removeClass("overflow");
     }, 3000);
   }
     if (height > 0 && height <= 100) {
       $("#burger").css("transform", "translate(" + -height / 1.6 + "%)");
       $("#burger img:nth-child(5)").css({ "margin-top": +height / 12 + "%" });
       $("#burger img:nth-child(4)").css({ "margin-top": +height / 12 + "%" });
       $("#burger img:nth-child(3)").css({ "margin-top": +height / 12 + "%" });
       $("#burger img:nth-child(1)").css({
         "margin-top": +(-height / 2) + 10 + "%",
       });
       $(".hero-img-bg").css({ opacity: 1 - height / 100 });

       console.log(height / 1.6);
     }
   
      if (height > 180 && height <= 250) {
        var revHeight = height - 250;
        console.log(revHeight);
        $("#burger img:nth-child(5)").css({
          "margin-top": +-revHeight / 15 + "%",
        });
        $("#burger img:nth-child(4)").css({
          "margin-top": +-revHeight / 15 + "%",
        });
        $("#burger img:nth-child(3)").css({
          "margin-top": +-revHeight / 15 + "%",
        });
        $("#burger img:nth-child(1)").css({
          "margin-top": +(revHeight / 2) + 10 + "%",
        });
        // $("#burger img:nth-child(1)").css({ "margin-bottom": + (-height / 2) + 10 + "%" });
      }
    if (height > 280 && height <= 380) {
      $("#burger").css("transform", "translateX(" + (180 - height) / 1.6 + "%)"
      );
    }
    if (height > 280 && height <= 800) {
      var opacity1 = ((height - 280) * 1.6) / 100;
      $(".bg2").show();
      $("#bg2").css("opacity", +opacity1);
      $("#bg1").css("opacity", 1 - opacity1);
    } else {
      $(".bg2").hide();
    }

    if (height > 130 && height <= 160) {
      $("#card01").addClass("active");
      $("#card02").addClass("active");
      $("#card03").addClass("active");
      $("#card04").addClass("active");
    } else {
      $("#card01").removeClass("active");
      $("#card02").removeClass("active");
      $("#card03").removeClass("active");
      $("#card04").removeClass("active");
    }
  });
});
