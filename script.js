// Images asset
const fruitImages = {
  1: "img/image1.png",
  2: "img/image2.png",
  3: "img/image3.png",
  4: "img/image4.png",
  5: "https://drive.google.com/uc?id=1k9fwXuTvRq31IiIottNXyLXVmp_AlSqY",
  6: "https://drive.google.com/uc?id=1cLTEsyaPIfpbY0cDBVGWNcAJkYQiKkDy",
  7: "https://drive.google.com/uc?id=1XVFuCCK-H7Bsl6MElKsTonRS3LFwVeKr",
  8: "https://drive.google.com/uc?id=1iEEkhqhXHMwYEU_OZXFNy4WVJd8XgKeF",
  9: "https://drive.google.com/uc?id=1YQoo8tP26iVhQYzdOoul0GXX7VGhwxcy",
  10: "https://drive.google.com/uc?id=1phnVR5D_T1I5zbGglRQvQKwqwO8OK8g8",
  11: "https://drive.google.com/uc?id=1EkdV0pffOX-icwcJPJfEl8f8J9v1uKoO",
  12: "https://drive.google.com/uc?id=1jw8973CNvmfp2mocKx8XgCnfU9BUAB5o",
  13: "https://drive.google.com/uc?id=1mklqc080uvbzidP1ZUT_v_INLvphiM2z",
  14: "https://drive.google.com/uc?id=16kYP2us-BsJOflHdPnhPeyUavGrrYLKr",
  15: "https://drive.google.com/uc?id=1IQHncfdA2iU1YIdQndggvmoLIOIhc1he",
  16: "https://drive.google.com/uc?id=15h11jLQqXTHnFdruo2Ahz-DQf_KQj3vW",
  17: "https://drive.google.com/uc?id=1ktnwX9h1O27dQEKtZt78f4rDv1AIbnFS",
  18: "https://drive.google.com/uc?id=1owtgIhe8hFVF2LLhldAf1rODrurgv7OQ",
  19: "https://drive.google.com/uc?id=1i1VvCV1D00qLJFBjKqF_D837dnav6lLR",
  20: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
};
// Text style
const textStyle = {
  1: { opacity: 0, transform: "0px" },
  2: { opacity: 0, transform: "0px" },
  3: { opacity: 0, transform: "0px" },
  4: { opacity: 0, transform: "0px" },
  5: { opacity: 0.25, transform: "15px" },
  6: { opacity: 0.5, transform: "10px" },
  7: { opacity: 0.75, transform: "5px" },
  8: { opacity: 1, transform: "0px" },
  9: { opacity: 1, transform: "0px" },
  10: { opacity: 1, transform: "0px" },
  11: { opacity: 1, transform: "0px" },
  12: { opacity: 1, transform: "0px" },
  13: { opacity: 1, transform: "0px" },
  14: { opacity: 1, transform: "0px" },
  15: { opacity: 1, transform: "0px" },
  16: { opacity: 1, transform: "0px" },
  17: { opacity: 1, transform: "0px" },
  18: { opacity: 1, transform: "0px" },
  19: { opacity: 1, transform: "0px" },
  20: { opacity: 1, transform: "0px" },
};

// Global variable to control the scrolling behavior
const step = 30; // For each 30px, change an image

function trackScrollPosition() {
  const y = window.scrollY;
  const label = Math.min(Math.floor(y / 30) + 1, 20);
  const imageToUse = fruitImages[label];
  // Change the background image
  $(".image-container").css("background-image", `url('${imageToUse}')`);
  // Change the text style
  const textStep = 2;
  const textStyleToUseLine1 = textStyle[label];
  const textStyleToUseLine2 =
    textStyle[Math.min(Math.max(label - textStep, 1), 20)];
  const textStyleToUseLine3 =
    textStyle[Math.min(Math.max(label - textStep * 2, 1), 20)];
  const textStyleToUseLine4 =
    textStyle[Math.min(Math.max(label - textStep * 3, 1), 20)];
  $("#line1").css({
    opacity: textStyleToUseLine1.opacity,
    transform: `translateY(${textStyleToUseLine1.transform})`,
  });
  $("#line2").css({
    opacity: textStyleToUseLine2.opacity,
    transform: `translateY(${textStyleToUseLine2.transform})`,
  });
  $("#line3").css({
    opacity: textStyleToUseLine3.opacity,
    transform: `translateY(${textStyleToUseLine3.transform})`,
  });
  $("#line4").css({
    opacity: textStyleToUseLine4.opacity,
    transform: `translateY(${textStyleToUseLine4.transform})`,
  });
}

$(document).ready(() => {
  // register an event listener on window
  $(window).scroll(() => {
    // We don't need to use 'event' as the scroll exist in window
    trackScrollPosition();
  });
});
