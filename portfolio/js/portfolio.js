// Animate out opening overlay
var animateOverlay = function () {
  var overlay = $('#overlay');
  var screenWidth = $(window).width();
  overlay.animate({
    left: screenWidth,
    // opacity: 0.5,
  }, 1500, function() {
    overlay.remove();
  });
}

// Animate line script
var animateLine = function (element, speed) {
  var divider = $( element ).find('.animate-divider');
  var targetHeight = divider.prev().innerHeight();
  divider.animate({
    opacity: 1,
    height: targetHeight
  }, speed, function() {
    resizeVerticalLines(element);
  });
}

// Resize vertical lines to fit sibling divs
var resizeVerticalLines = function (element) {
  var divider = $( element ).find('.animate-divider');
  $(window).resize(function() {
    var newHeight = divider.prev().innerHeight();
    if (divider.height() > 1) {
        divider.animate({
          opacity: 1,
          height: newHeight
        }, 10, function() {
          // Animation complete.
        });
    }
  });
}

// Animate horizontal line
var animateHorizontal = function () {
  $( ".horizontal-line" ).animate({
    opacity: 1,
    width: "340"
  }, 1400, function() {
    // Animation complete.
  });
}

// Animate page title in
var animateHeader = function (element) {
  $( element ).animate({
    opacity: .6,
    letterSpacing: "2"
  }, 1000, function() {
    // Animation complete
  });
}

// Animate page title out
var fadeOutHeader = function (element) {
  $( element ).animate({
    opacity: 0,
    letterSpacing: "5px"
  }, 500, function() {
    // Animation complete
  });
}

// Reveal hidden text
var revealText = function(element, time) {
  setTimeout(function() {
    $( element ).animate({
      opacity: 1,
    }, 600, function() {
      // Animation complete
    });
  }, time);
}








