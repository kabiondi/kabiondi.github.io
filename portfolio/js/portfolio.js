// Animate line script
var animateLine = function () {
  $( ".animate-divider" ).animate({
    opacity: 1,
    height: "170"
  }, 1000, function() {
    // Animation complete.
  });
}

var animateHorizontal = function () {
  $( ".horizontal-line" ).animate({
    opacity: 1,
    width: "270"
  }, 1400, function() {
    // Animation complete.
  });
}

var fadeOutHeader = function (element) {
  $( element ).animate({
    opacity: 0,
    letterSpacing: "5px"
  }, 500, function() {
    // Animation complete
  });
}

var animateHeader = function (element) {
  $( element ).animate({
    opacity: .5,
    letterSpacing: "2"
  }, 1000, function() {
    // Animation complete
  });
}