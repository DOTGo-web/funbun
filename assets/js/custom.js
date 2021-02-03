$(function () {
  $(".btn-round").click(
    { animateIn: "closeButton", animateOut: "plusButton" },
    animate_function
  );

  function animate_function(event) {
    if ($(this).hasClass(event.data.animateIn)) {
      $(this).removeClass(event.data.animateIn).addClass(event.data.animateOut);
       $("#div-to-toggle").hide();
       event.stopPropagation();  
    } else if ($(this).hasClass(event.data.animateOut)) {
      $(this).removeClass(event.data.animateOut).addClass(event.data.animateIn);
      $("#div-to-toggle").show();
      event.stopPropagation();    
    } else {
      $(this).addClass("animated " + event.data.animateIn);
    }
  }
});
