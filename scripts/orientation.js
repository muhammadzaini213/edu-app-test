function handleOrientationChange() {
    if (window.matchMedia("(orientation: landscape)").matches) {
      isLandscape();
    } else {
      isPotrait();
    }
  }
  
  handleOrientationChange();
  
  window.addEventListener("orientationchange", handleOrientationChange);
  window.addEventListener("resize", handleOrientationChange);