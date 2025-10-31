document.addEventListener("DOMContentLoaded", () => {
        // contact form
    const form = document.getElementById("contactForm");
    const response = document.getElementById("formResponse");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Empty validation
      if (name === "" || email === "" || message === "") {
        response.textContent = "❌ Please fill in all fields.";
        response.style.color = "red";
        return;
      }
  
      // Email validation
      const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailPattern.test(email)) {
        response.textContent = "⚠️ Please enter a valid email address.";
        response.style.color = "orange";
        return;
      }
  
      // If valid
      response.textContent = "✅ Message sent successfully!";
      response.style.color = "limegreen";
      form.reset();
  
      // Hide message after 5 seconds
      setTimeout(() => (response.textContent = ""), 5000);
    });
  
 //smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
  
        if (targetId.length > 1) {
          e.preventDefault();
          document.querySelector(targetId).scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  
    const backToTop = document.querySelector('a[href="#top"]');
  
    if (backToTop) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          backToTop.style.opacity = "1";
          backToTop.style.pointerEvents = "auto";
        } else {
          backToTop.style.opacity = "0";
          backToTop.style.pointerEvents = "none";
        }
      });
  
      backToTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
  
  const projectCards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2 // triggers when 20% of the card is visible
});

projectCards.forEach(card => observer.observe(card));

    