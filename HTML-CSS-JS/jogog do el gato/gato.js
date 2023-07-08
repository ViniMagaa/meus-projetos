let box = document.querySelector("#elGato");
      let left = 0;
      let top = 0;
      document.onkeydown = function(event) {
        switch (event.keyCode) {
          case 37:
            // left arrow
            left -= 5;
            break;
          case 38:
            // up arrow
            top -= 5;
            break;
          case 39:
            // right arrow
            left += 5;
            break;
          case 40:
            // down arrow
            top += 5;
            break;
        }
        box.style.left = left + "px";
        box.style.top = top + "px";
      };