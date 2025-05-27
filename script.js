// Scroll to section
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  }
  
  // Scroll animation
  function revealOnScroll() {
    const elements = document.querySelectorAll(".scroll-reveal");
    const triggerBottom = window.innerHeight * 0.9;
  
    elements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;
  
      if (boxTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);