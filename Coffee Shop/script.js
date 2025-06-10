document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const openBtn = document.getElementById("menu-open-button");
  const closeBtn = document.getElementById("menu-close-button");
  const navLinks = document.querySelectorAll(".nav-link");

  openBtn.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
    document.documentElement.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  });

  closeBtn.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
    document.documentElement.style.overflow = '';
  });

  // Close menu when clicking on links
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.remove("show-mobile-menu");
      document.documentElement.style.overflow = '';
    });
  });

  // Initialize Swiper
  const swiper = new Swiper('.testimonial-slider', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 50,
      }
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add animation on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.menu-item, .about-details, .contact-left');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }

  // Set initial state for animated elements
  document.querySelectorAll('.menu-item, .about-details, .contact-left').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Run once on load
  animateOnScroll();
  
  // Then on scroll
  window.addEventListener('scroll', animateOnScroll);

  // Form submission handling
  const contactForm = document.querySelector('.contact-section form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector('textarea').value;
      
      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', { name, email, message });
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      this.reset();
    });
  }
});

// Initialize lightbox if the library is loaded
if (typeof lightbox !== 'undefined') {
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': 'Image %1 of %2'
  });
}




// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Subtracting 80px to account for fixed header
        behavior: 'smooth'
      });
    }
  });
});