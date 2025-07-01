window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");
  
    // Add 'scrolled' class to navbar after scroll
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  
    // Highlight active section
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        links.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${section.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
  