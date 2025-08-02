gsap.to("#nav",{
   backgroundColor:"black",
   height:"120px",
   duration:0.5,
   scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
   //  markers:true,
    start:"top -10%",
    end:"top -11%",
     scrub:1,
}})
gsap.to("#page2",{
   backgroundColor:"black",
   height:"620px",
   duration:2.5,
   scrollTrigger:{
      trigger:"#page2",
      scroller:"body",
      // markers:true,
      start:"top 50%",
      end:"top 51%",
      scrub:1,
   }
})
const light = document.getElementById('cursorLight');
    const highlight = document.getElementById('cursorHighlight');
    let mouseX = 0, mouseY = 0;
    let lightX = 0, lightY = 0;
    let highlightX = 0, highlightY = 0;
    
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    // Click effect
    document.addEventListener('click', () => {
      // Pulse animation
      light.style.width = '600px';
      light.style.height = '600px';
      highlight.style.transform = 'translate(-50%, -50%) scale(2.5)';
      
      setTimeout(() => {
        light.style.width = '100%';
        light.style.height = '100%';
        highlight.style.transform = 'translate(-50%, -50%) scale(1)';
      }, );
    });
    
    // Smooth animations
    function animate() {
      // Light follows with delay (easing effect)
      lightX += (mouseX - lightX) * 0.08;
      lightY += (mouseY - lightY) * 0.08;
      light.style.left = `${lightX}px`;
      light.style.top = `${lightY}px`;
      
      // Highlight follows cursor exactly
      highlight.style.left = `${mouseX}px`;
      highlight.style.top = `${mouseY}px`;
      
      // Optional: Add subtle pulsing to light
      const pulse = Math.sin(Date.now() * 0.005) * 10 + 110;
      light.style.width = `${pulse}px`;
      light.style.height = `${pulse}px`;
      
      requestAnimationFrame(animate);
    }
    
    animate();