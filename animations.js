window.onload = function() {
    var elements = document.querySelectorAll(".fade-in");
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.style.opacity = 0;
      var tick = function() {
        element.style.opacity = +element.style.opacity + 0.05;
        if (+element.style.opacity < 1) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
      };
      tick();
    }
  };