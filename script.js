// Page loader
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 1000);
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuBtn.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Language switching
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'en';
    
    // Function to change language
    function changeLanguage(lang) {
      currentLang = lang;
      
      // Update all elements with data attributes
      document.querySelectorAll('[data-en], [data-de]').forEach(element => {
        if (element.getAttribute(`data-${lang}`)) {
          if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = element.getAttribute(`data-${lang}`);
          } else {
            element.textContent = element.getAttribute(`data-${lang}`);
          }
        }
      });
      
      // Update active button state
      langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      // Update page title based on language
      if (lang === 'de') {
        document.title = "Sham Imbiss Ochsenfurt - Syrische Spezialitäten";
      } else {
        document.title = "Sham Imbiss Ochsenfurt - Syrian Specialties";
      }
      
      // Save language preference
      localStorage.setItem('preferredLang', lang);
    }
    
    // Add click event to language buttons
    langButtons.forEach(button => {
      button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        changeLanguage(lang);
      });
    });
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
      changeLanguage(savedLang);
    }
    
    // Make all external links open in new tab
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      if (!link.getAttribute('target') && !link.classList.contains('whatsapp-float')) {
        link.setAttribute('target', '_blank');
      }
    });
    
    // Open Google Maps when clicking on the map container
    const mapContainer = document.getElementById('mapContainer');
    mapContainer.addEventListener('click', () => {
      window.open('https://maps.google.com?q=Hauptstraße+72+97199+Ochsenfurt', '_blank');
    });
    
    // Add animation on scroll
    function animateOnScroll() {
      const elements = document.querySelectorAll('.section, .gallery-item, .contact-card, .menu-image-item');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
          element.style.opacity = 1;
          element.style.transform = 'translateY(0)';
        }
      });
    }
    
    // Initialize elements for animation
    document.querySelectorAll('.section, .gallery-item, .contact-card, .menu-image-item').forEach(element => {
      element.style.opacity = 0;
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on load
    setTimeout(animateOnScroll, 500);


    