const gallery = document.getElementById("gallery");
let canPan = false;


document.body.onmousedown = function() { 
      canPan = true;
    }
document.body.onmouseup = function() {
      canPan = false;
}

window.onmousemove = e => {
  const mouseX = e.clientX,
        mouseY = e.clientY;

  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  

  const panX = gallery.offsetWidth * xDecimal * -1,
        panY = gallery.offsetHeight * yDecimal * -1;
    
  if(canPan){
      gallery.animate({
            transform: `translate(${panX}px, ${panY}px)`
      }, {
            duration: 4000,
            fill: "forwards",
            easing: "ease"
      })
  }
  
}

