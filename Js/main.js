document.addEventListener("DOMContentLoaded", function() {
    // Scroll down sticky navbar script start
    window.addEventListener("scroll", function() {
      if (this.scrollY > 20) {
        document.querySelector(".navbar").classList.add("sticky");
      } else {
        document.querySelector(".navbar").classList.remove("sticky");
      }
    });
    // Scroll down sticky navbar script end
    //navbar
    document.querySelector('.menu-btn').addEventListener('click', function() {
        document.querySelector('.navbar .menu').classList.toggle('active');
        document.querySelector('.menu-btn i').classList.toggle('active'); 
      });
      
      document.querySelector('.navbar .menu').addEventListener('click', function() {
        document.querySelector('.navbar .menu').classList.remove('active');
        document.querySelector('.menu-btn i').classList.remove('active'); 
      });
  });
  // ------------------------------
  // Typing Animation
  function typeAnimation(textArray, typedTextSpan, typingDelay, erasingDelay, newTextDelay) {
    const cursorSpan = typedTextSpan.nextElementSibling;
    const textArrayLength = textArray.length;
    let textArrayIndex = 0;
    let charIndex = 0;
  
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textArrayIndex++;
        if (textArrayIndex >= textArrayLength) {
          textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1100);
      }
    }
  
    document.addEventListener("DOMContentLoaded", () => {
      if (textArrayLength) {
        setTimeout(type, newTextDelay + 250);
      }
    });
  }
  
  typeAnimation(["web developer  " , "Frontend developer"], document.querySelector(".typing"), 100, 50, 100);
  typeAnimation(["web developer " , "Frontend developer"], document.querySelector(".typing2"), 100, 50, 100);