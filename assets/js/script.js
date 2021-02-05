// Select dom items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set the initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));
    // Reset the menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    // Reset the menu state
    showMenu = false;
  }
}


// Owl Carousel
$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        navigation: true,
        autoPlay: true,
        responsive: true,
        items: 5,
        slideSpeed: 200,
        pagination:false,
        goToFirst :false,
        navigationText: [
            "<img src='assets/images/arrow_prev.png' width='100%'>",
            "<img src='assets/images/arrow_next.png' width='100%'>"
        ],
    })
});



 $(function () {
   $(".btn-round").click(
     { animateIn: "closeButton", animateOut: "plusButton" },
     animate_function
   );

   function animate_function(event) {
     if ($(this).hasClass(event.data.animateIn)) {
       $(this)
         .removeClass(event.data.animateIn)
         .addClass(event.data.animateOut);
     } else if ($(this).hasClass(event.data.animateOut)) {
       $(this)
         .removeClass(event.data.animateOut)
         .addClass(event.data.animateIn);
     } else {
       $(this).addClass("animated " + event.data.animateIn);
     }
   }

   //end do something
 });
