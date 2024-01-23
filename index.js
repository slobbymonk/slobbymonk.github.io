const gallery = document.getElementById("gallery");

window.onmousemove = e => {
      const mouseX = e.clientX,
            mouseY = e.clientY;
      
      const xDecimal = mouseX / window.innerWidth,
            yDecimal = mouseY / window.innerHeight;

      const maxX = gallery.offsetWidth - window.innerWidth;
            maxY = gallery.offsetHeight - window.innerHeight;

      const panX = maxX * xDecimal * -1,
            panY = maxY * yDecimal * -1;

      gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
      }, {
            duration: 4000,
            fill: "forwards",
            easing: "ease"
      })
}

// const gallery = document.getElementById("gallery");
// let isMoving = false;

// let currentPanX = 0;
// let currentPanY = 0;

// let mouseX,
//       mouseY;

// window.onmousemove = e => {
//   mouseX = e.clientX,
//   mouseY = e.clientY;
// };
// // document.addEventListener('mouseleave', () => {
// //       isMoving = false;
// // });
// // document.addEventListener('mouseenter', () => {
// //       isMoving = true;
// // });
// document.addEventListener('mousedown', () => {
//       isMoving = true;
// });
// document.addEventListener('mouseup', () => {
//       isMoving = false;
// });

// function update(){
//       if(isMoving){
//             const xDecimal = mouseX / window.innerWidth,
//             yDecimal = mouseY / window.innerHeight;

//             // const willMove = xDecimal <= 0.05 || xDecimal >= 0.95 || yDecimal <= 0.05 || yDecimal >= 0.95;

//             // if (!willMove) {
//             //       window.requestAnimationFrame(update);
//             //   return; // Do not update if outside the specified range
//             // }

//             const targetPanX = gallery.offsetWidth * xDecimal * -1;
//             const targetPanY = gallery.offsetHeight * yDecimal * -1;

//             const easeFactor = 0.01; // Adjust the ease factor for the desired transition speed

//             currentPanX += (targetPanX - currentPanX) * easeFactor;
//             currentPanY += (targetPanY - currentPanY) * easeFactor;

//             gallery.style.transform = `translate(${currentPanX}px, ${currentPanY}px)`;


//       }
//       window.requestAnimationFrame(update);
// }
// window.requestAnimationFrame(update);