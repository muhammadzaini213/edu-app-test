function gateAnimation(type) {

    if (type == 1) {
      gate_topLeft.classList.remove('animated-stay-gate-left');
      gate_topLeft.classList.remove('animated-slide-gate-out-left');
      gate_bottomRight.classList.remove('animated-slide-gate-out-right')
      startAnimation(gate_topLeft, 'animated-blink-gate-left');
      startAnimation(gate_bottomRight, 'animated-blink-gate-right');
      startAnimation(arrow_container, "fade");
      
    }
    else if(type == 2) {
      gate_topLeft.classList.remove('animated-stay-gate-left');
      gate_topLeft.classList.remove('animated-blink-gate-left');
      gate_bottomRight.classList.remove('animated-blink-gate-right');
      gate_topLeft.classList.remove('animated-slide-gate-in-left');
      gate_bottomRight.classList.remove('animated-slide-gate-in-right');
      startAnimation(gate_topLeft, 'animated-slide-gate-out-left');
      startAnimation(gate_bottomRight, 'animated-slide-gate-out-right');
      startAnimation(arrow_container, "fade");
    }
    else if(type == 3) {
      gate_topLeft.classList.remove('animated-stay-gate-left');
      gate_topLeft.classList.remove('animated-blink-gate-left');
      gate_bottomRight.classList.remove('animated-blink-gate-right');
      gate_topLeft.classList.remove('animated-slide-gate-out-left');
      gate_bottomRight.classList.remove('animated-slide-gate-out-right');
      startAnimation(gate_topLeft, 'animated-slide-gate-in-left');
      startAnimation(gate_bottomRight, 'animated-slide-gate-in-right');
      startAnimation(arrow_container, "fade");
    } else if(type == 4) {
      gate_topLeft.classList.remove('animated-blink-gate-left');
      gate_bottomRight.classList.remove('animated-blink-gate-right');
      gate_topLeft.classList.remove('animated-slide-gate-out-left');
      gate_bottomRight.classList.remove('animated-slide-gate-in-right');

      startAnimation(gate_topLeft, 'animated-stay-gate-left');
      startAnimation(gate_bottomRight, 'animated-slide-gate-out-right');
      startAnimation(arrow_container, "fade");
    } else if(type == 5) {
      gate_topLeft.classList.remove('animated-blink-gate-left');
      gate_bottomRight.classList.remove('animated-blink-gate-right');
      gate_topLeft.classList.remove('animated-slide-gate-out-left');
      gate_bottomRight.classList.remove('animated-slide-gate-out-right');

      startAnimation(gate_topLeft, 'animated-stay-gate-left');
      startAnimation(gate_bottomRight, 'animated-slide-gate-in-left');
      startAnimation(arrow_container, "fade");
    }
  }
  
  
  function startAnimation(element, animationClass) {
    if (element && element.classList.contains(animationClass)) {
      element.classList.remove(animationClass);
      void element.offsetWidth;
    }
  
    element.classList.add(animationClass);
  }