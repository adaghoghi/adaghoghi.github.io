$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.sidebar').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});

// If you don't care about changing the height when the window resizes then you can use the following simplified version instead:

// $(document).ready(function() {
//   windowHeight = $(window).innerHeight();
//   $('.sidebar').css('min-height', windowHeight);
// });