/**
 * Abdul Haseeb - Portfolio Website JavaScript Interactivity
 * Built with vanilla JavaScript for premium responsiveness and speed.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Basic Console Log (Required by User request)
  console.log('%c🚀 Abdul Haseeb Portfolio Loaded Successfully!', 'color: #38bdf8; font-size: 1.25rem; font-weight: bold; text-shadow: 0 0 10px rgba(56, 189, 248, 0.4);');
  console.log('%c👨‍💻 Mobile App & Flutter Developer | Wahcantt, Pakistan', 'color: #94a3b8; font-size: 1rem;');
  console.log('%c✨ Image Fullscreen Lightbox Enabled.', 'color: #3b82f6; font-size: 0.9rem;');

  // 2. Dynamic Footer Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. Mobile Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-item a');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // 4. Hero Section Typing Effect
  const typingText = document.getElementById('typing-text');
  if (typingText) {
    const words = [
      'Flutter Developer.',
      'Android App Developer.',
      'UI/UX Enthusiast.',
      'Creative Video Editor.'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;

    function typeEffect() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        delay = 40; // Faster deleting speed
      } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        delay = 100; // Normal typing speed
      }

      // Handle transition states
      if (!isDeleting && charIndex === currentWord.length) {
        delay = 2000; // Pause at end of completed word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Loop around words
        delay = 500; // Pause before starting new word
      }

      setTimeout(typeEffect, delay);
    }

    // Initialize typing loop
    setTimeout(typeEffect, 1000);
  }

  // 5. Scroll Spy - Highlight active section link in navigation bar
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('.nav-links li');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      // Triggers slightly before the section reaches top (80px header height offset)
      if (window.scrollY >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navLi.forEach(li => {
      li.classList.remove('active');
      const link = li.querySelector('a');
      if (link && link.getAttribute('href') === `#${current}`) {
        li.classList.add('active');
      }
    });
  });

  // 6. Fullscreen Image Lightbox Modal
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentProjectImages = [];
  let currentImageIndex = 0;
  let currentProjectTitle = '';

  // Get all project overlay containers
  const projectOverlays = document.querySelectorAll('.project-overlay');

  projectOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid double bubbling issues
      
      const imagesString = overlay.getAttribute('data-images');
      currentProjectTitle = overlay.getAttribute('data-title') || 'Project Image';
      
      if (imagesString) {
        // Split by comma to get individual image names
        currentProjectImages = imagesString.split(',').map(img => img.trim());
        currentImageIndex = 0; // Reset index to first image
        openLightbox();
      }
    });
  });

  function openLightbox() {
    if (!lightbox) return;
    
    // Update lightbox content before showing
    updateLightboxContent();
    
    // Display Lightbox
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  function updateLightboxContent() {
    if (currentProjectImages.length === 0) return;
    
    const currentImgSrc = currentProjectImages[currentImageIndex];
    lightboxImg.src = currentImgSrc;
    lightboxImg.alt = `${currentProjectTitle} - Image ${currentImageIndex + 1}`;
    lightboxCaption.textContent = currentProjectTitle;
    
    // Counter display
    lightboxCounter.textContent = `Image ${currentImageIndex + 1} of ${currentProjectImages.length}`;
    
    // If only one image, hide arrow navigation controls
    if (currentProjectImages.length <= 1) {
      lightboxPrev.classList.add('hidden');
      lightboxNext.classList.add('hidden');
    } else {
      lightboxPrev.classList.remove('hidden');
      lightboxNext.classList.remove('hidden');
    }
  }

  function showNextImage() {
    if (currentProjectImages.length <= 1) return;
    currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
    updateLightboxContent();
  }

  function showPrevImage() {
    if (currentProjectImages.length <= 1) return;
    currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
    updateLightboxContent();
  }

  // Setup Lightbox Controls Event Listeners
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      showNextImage();
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrevImage();
    });
  }

  // Click on background overlay to close
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      // Check that click was directly on the background, not on images/controls
      if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation support
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      showNextImage();
    } else if (e.key === 'ArrowLeft') {
      showPrevImage();
    }
  });
});
