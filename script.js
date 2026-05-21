/**
 * Abdul Haseeb - Portfolio Website JavaScript Interactivity
 * Built with vanilla JavaScript for premium responsiveness and speed.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Basic Console Log
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

  // Listen for clicks on .project-overlay elements dynamically using event delegation
  document.body.addEventListener('click', (e) => {
    const overlay = e.target.closest('.project-overlay');
    if (overlay) {
      e.stopPropagation();
      const imagesString = overlay.getAttribute('data-images');
      currentProjectTitle = overlay.getAttribute('data-title') || 'Project Image';
      
      if (imagesString) {
        currentProjectImages = imagesString.split(',').map(img => img.trim());
        currentImageIndex = 0;
        openLightbox();
      }
    }
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

  // ==========================================================================
  // 7. DYNAMIC PORTFOLIO DATA & PROJECTS (localStorage)
  // ==========================================================================

  const DEFAULT_PROJECTS = [
    {
      title: "Flutter E-Commerce",
      date: "1 APR 2026 - 30 APR 2026",
      desc: "A mobile application designed to make online shopping simple and user-friendly. Includes secure login, product category browsing, filter searches, shopping cart, and order tracking. Integrates payment systems and real-time notifications.",
      images: ["e commerce.png"],
      tags: ["Flutter", "Dart", "REST API", "E-commerce"]
    },
    {
      title: "Flutter Collage Alert",
      date: "1 APR 2026 - 30 APR 2026",
      desc: "A mobile app built to help students and faculty stay updated with important college announcements, events, and alerts. Provides instant real-time notifications and an intuitive post-publishing portal.",
      images: ["collage alert.png"],
      tags: ["Flutter", "Firebase Cloud Messaging", "Notifications"]
    },
    {
      title: "Flutter Digital Art Gallery",
      date: "1 MAY 2026 - 26 MAY 2026",
      desc: "A modern app where artists and users explore, upload, and interact with artworks. Includes category searches, favorite bookmarks, live community comments, and AI-based auto-tagging for easy browsing.",
      images: ["art gallery.png", "art gallery2.png"],
      tags: ["Flutter", "AI Tagging", "Firestore", "Community Portal"]
    },
    {
      title: "Flutter Time Zone Pro",
      date: "1 MAY 2026 - 26 MAY 2026",
      desc: "A smart app that helps users compare and convert global time zones easily. Features real-time offset synchronization, offline accessibility, integrated voice assistant support, and automatic daylight saving detection.",
      images: ["time zone.png", "time zone 2.png"],
      tags: ["Flutter", "Timezones API", "Offline Mode", "Voice Assistant"]
    }
  ];

  const DEFAULT_DATA = {
    hero: {
      tag: "Available for Internships & Projects",
      name: "Abdul Haseeb",
      avatar: "haseebimg.jpeg",
      desc: "Passionate BS Computer Science student and Mobile Application Developer specializing in Flutter and native Android. I build elegant, performant mobile apps integrated with real-time backend databases and external APIs.",
      typingWords: [
        "Flutter Developer.",
        "Android App Developer.",
        "UI/UX Enthusiast.",
        "Creative Video Editor."
      ]
    },
    about: {
      profileParagraphs: [
        "Currently pursuing my Bachelor of Science in Computer Science at the University of Wah, I am deeply invested in creating applications that solve everyday problems. I focus on developing clean UI/UX designs and integrating robust API backends to deliver engaging mobile experiences.",
        "In addition to app development, I have experience editing documentary-style videos for storytelling on YouTube, allowing me to blend engineering and visual creativity."
      ],
      stats: [
        { num: "4+", label: "Complex Apps Built" },
        { num: "3+", label: "Certifications Earned" }
      ],
      timeline: [
        {
          date: "Current Student (Graduating 2027)",
          title: "BS Computer Science",
          institution: "University of Wah, Wahcantt, Pakistan",
          desc: "Focusing on core computer science subjects, software engineering, databases, and mobile system architectures."
        },
        {
          date: "Dec 2025 - Jan 2026",
          title: "Introduction to AI",
          institution: "The Open University (United Kingdom)",
          desc: "Earned certification covering foundational artificial intelligence principles, machine learning concepts, and modern AI implementations."
        },
        {
          date: "Feb 2026",
          title: "App Development with Flutter",
          institution: "Cipher Schools",
          desc: "Comprehensive practical course detailing state management, clean architecture, responsive layouts, and animations in Flutter."
        }
      ]
    },
    skills: [
      { icon: "fa-brands fa-android", title: "Android Development", desc: "Proficient in native Android development, managing lifecycle, design guidelines, and system APIs." },
      { icon: "fa-solid fa-mobile-screen-button", title: "Flutter Development", desc: "Building high-performance cross-platform apps using Dart, covering state management and customized UI components." },
      { icon: "fa-solid fa-palette", title: "UI/UX Design", desc: "Designing modern, intuitive layouts with a focus on responsiveness, dark modes, and micro-interactions." },
      { icon: "fa-solid fa-cloud", title: "Firebase Integration", desc: "Integrating cloud services including Cloud Firestore real-time databases and Cloud Storage for assets." },
      { icon: "fa-solid fa-network-wired", title: "REST API Services", desc: "Connecting apps with online databases and RESTful APIs to deliver real-time data synchronization." },
      { icon: "fa-solid fa-video", title: "Video Editing", desc: "Editing documentary-style story videos, pacing, audio synchronization, and visual effects (Movavi)." }
    ],
    experience: [
      {
        role: "Mobile Application Developer Intern",
        company: "Arch Technologies",
        date: "1 APR 2026 - 26 MAY 2026",
        icon: "fa-solid fa-mobile-button",
        details: [
          "Worked on building and improving mobile applications, making sure they run smoothly and are easy to use.",
          "Connected apps with online databases and APIs so that users could get real-time synced information.",
          "Collaborated with team members, sharing ideas and coding problems together to deliver better results.",
          "Spent time fixing bugs and optimizing rendering performance so the apps felt faster and more reliable.",
          "Contributed to the design side, helping make the app interfaces more user-friendly and visually appealing."
        ]
      },
      {
        role: "Video Editor",
        company: "YouTube Channel",
        date: "10 JUN 2025 - 12 AUG 2025",
        icon: "fa-brands fa-youtube",
        details: [
          "Edited documentary-style videos, turning raw footage and recordings into polished, engaging visual stories.",
          "Developed pacing rhythms, clean transitions, and color/sound enhancements to retain audience attention.",
          "Optimized export profiles for YouTube, ensuring professional grade quality and compatibility with platform guidelines."
        ]
      }
    ],
    hobbies: [
      "Building and experimenting with mobile apps that solve everyday problems.",
      "Designing user interfaces with a focus on UI/UX principles and digital engagement.",
      "Editing video sequences and creating digital content for engaging storytelling.",
      "Exploring new tech trends like IoT, Blockchain, and AI through small testing prototypes."
    ],
    languages: {
      native: { name: "Urdu", desc: "Mother tongue (Native proficiency)" },
      english: {
        name: "English (C1/C2 Proficient User)",
        levels: [
          { label: "Reading", val: "C1 Level" },
          { label: "Listening", val: "C2 Level" },
          { label: "Writing", val: "C2 Level" },
          { label: "Speaking", val: "A1/A2 Spoken" }
        ]
      }
    },
    contact: {
      phone: "(+92) 3305174366",
      email: "abdulhaseeb.cs.work@gmail.com",
      location: "Wahcantt, Islamabad, Pakistan",
      linkedin: "https://www.linkedin.com/in/abdul-haseebworks/",
      socials: [
        { platform: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/abdul-haseebworks/" }
      ]
    }
  };

  const STORAGE_KEY = 'portfolio_projects';
  const DATA_STORAGE_KEY = 'portfolio_data';

  // Initialize localStorage with default projects on first visit
  function getProjects() {
    let stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
      return [...DEFAULT_PROJECTS];
    }
    return JSON.parse(stored);
  }

  function saveProjects(projects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }

  // Initialize localStorage with default section data on first visit
  function getPortfolioData() {
    let stored = localStorage.getItem(DATA_STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(DEFAULT_DATA));
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
    let data = JSON.parse(stored);
    
    // Migration: ensure contact.socials exists
    if (!data.contact.socials) {
      data.contact.socials = [
        { platform: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: data.contact.linkedin || "https://www.linkedin.com/in/abdul-haseebworks/" }
      ];
      localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(data));
    }
    // Migration: ensure hero.avatar exists
    if (!data.hero.avatar) {
      data.hero.avatar = "haseebimg.jpeg";
      localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(data));
    }
    return data;
  }

  // ---------- Shared Project Card HTML Builder ----------

  /**
   * Build the HTML for a single project card.
   * @param {object} proj - The project data object.
   * @param {number} index - Index in the projects array.
   * @param {boolean} showActions - Whether to include Edit/Delete action buttons.
   */
  function buildProjectCardHTML(proj, index, showActions) {
    const tagsHTML = proj.tags.map(t => `<span>${t}</span>`).join('');
    const imagesAttr = proj.images.join(',');
    const isMultiImage = proj.images.length > 1;
    const imageCounterHTML = isMultiImage 
      ? `<div class="project-image-counter"><i class="fa-solid fa-images"></i> ${proj.images.length} Images</div>`
      : '';
    const zoomText = isMultiImage ? `CLICK TO ZOOM (${proj.images.length} IMAGES)` : 'CLICK TO ZOOM';

    const actionsHTML = showActions ? `
      <div class="project-actions">
        <button class="action-btn action-btn-edit" data-index="${index}" title="Edit Project">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="action-btn action-btn-delete" data-index="${index}" title="Delete Project">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    ` : '';

    return `
      <div class="glass-card project-card reveal-item">
        ${actionsHTML}
        <div class="project-img-wrapper">
          ${imageCounterHTML}
          <img src="${proj.images[0]}" alt="${proj.title} Interface">
          <div class="project-overlay" data-images="${imagesAttr}" data-title="${proj.title}">
            <button class="project-zoom-btn" aria-label="Open Fullscreen Preview">
              <i class="fa-solid fa-expand"></i>
            </button>
            <span class="project-overlay-text">${zoomText}</span>
          </div>
        </div>
        <div class="project-info">
          <span class="project-date">${proj.date}</span>
          <h3>${proj.title}</h3>
          <p>${proj.desc}</p>
          <div class="project-tags">
            ${tagsHTML}
          </div>
        </div>
      </div>
    `;
  }

  // ---------- Home Page: Render first 3 projects ----------

  const homeGrid = document.getElementById('home-projects-grid');
  if (homeGrid) {
    renderHomeProjects();
  }

  function renderHomeProjects() {
    if (!homeGrid) return;
    const projects = getProjects();
    const first3 = projects.slice(0, 3);
    homeGrid.innerHTML = first3.map((proj, i) => buildProjectCardHTML(proj, i, false)).join('');
    observeRevealItems();
  }

  // ---------- Projects Page: Render all projects (Read-only on public page) ----------

  const projectsGrid = document.getElementById('projects-page-grid');
  if (projectsGrid) {
    renderProjectsPage();
  }

  function renderProjectsPage() {
    if (!projectsGrid) return;
    const projects = getProjects();
    // Render with false for showActions since adding/editing/deleting are moved to the Manager page
    projectsGrid.innerHTML = projects.map((proj, i) => buildProjectCardHTML(proj, i, false)).join('');
    observeRevealItems();
  }

  // ---------- Dynamic Data Rendering (index.html sections) ----------

  function renderDynamicData() {
    const data = getPortfolioData();
    if (!data) return;

    // 1. Hero
    const heroTag = document.getElementById('hero-tag-val');
    const heroName = document.getElementById('hero-name-val');
    const heroDesc = document.getElementById('hero-desc-val');
    const heroAvatar = document.getElementById('hero-avatar-img');
    if (heroTag) heroTag.textContent = data.hero.tag;
    if (heroName) heroName.textContent = data.hero.name;
    if (heroDesc) heroDesc.textContent = data.hero.desc;
    if (heroAvatar && data.hero.avatar) heroAvatar.src = data.hero.avatar;

    // 2. About paragraphs
    const profileContainer = document.getElementById('about-profile-container');
    if (profileContainer) {
      profileContainer.innerHTML = data.about.profileParagraphs.map(p => `<p>${p}</p>`).join('');
    }

    // 3. Stats
    const statsContainer = document.getElementById('about-stats-container');
    if (statsContainer) {
      statsContainer.innerHTML = data.about.stats.map(stat => `
        <div class="glass-card stat-item reveal-item">
          <span class="stat-num">${stat.num}</span>
          <p class="stat-label">${stat.label}</p>
        </div>
      `).join('');
    }

    // 4. Education Timeline
    const timelineContainer = document.getElementById('about-timeline-container');
    if (timelineContainer) {
      timelineContainer.innerHTML = data.about.timeline.map(item => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">${item.date}</div>
          <div class="glass-card timeline-card reveal-item">
            <h4>${item.title}</h4>
            <h5>${item.institution}</h5>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${item.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // 5. Skills Grid
    const skillsContainer = document.getElementById('skills-grid-container');
    if (skillsContainer) {
      skillsContainer.innerHTML = data.skills.map((skill, i) => `
        <div class="glass-card skill-card reveal-item reveal-delay-${i % 3}">
          <div class="skill-icon">
            <i class="${skill.icon}"></i>
          </div>
          <h3>${skill.title}</h3>
          <p>${skill.desc}</p>
        </div>
      `).join('');
    }

    // 6. Experience Timeline
    const expContainer = document.getElementById('experience-timeline-container');
    if (expContainer) {
      expContainer.innerHTML = data.experience.map((exp, i) => {
        const detailsHTML = exp.details.map(det => `<li>${det}</li>`).join('');
        return `
          <div class="exp-item">
            <div class="exp-dot"><i class="${exp.icon}" style="font-size: 0.75rem; color: var(--primary);"></i></div>
            <div class="glass-card exp-content reveal-item reveal-delay-${i % 2}">
              <div class="exp-header">
                <div>
                  <h3>${exp.role}</h3>
                  <div class="exp-company">${exp.company}</div>
                </div>
                <div class="exp-date">${exp.date}</div>
              </div>
              <ul class="exp-details">
                ${detailsHTML}
              </ul>
            </div>
          </div>
        `;
      }).join('');
    }

    // 7. Hobbies
    const hobbiesContainer = document.getElementById('hobbies-container');
    if (hobbiesContainer) {
      hobbiesContainer.innerHTML = data.hobbies.map(h => `<li>${h}</li>`).join('');
    }

    // 8. Languages
    const languagesContainer = document.getElementById('languages-container');
    if (languagesContainer) {
      let levelsHTML = data.languages.english.levels.map(lvl => `
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); padding: 8px 12px; border-radius: 6px;">
          <strong style="color: var(--primary);">${lvl.label}:</strong> ${lvl.val}
        </div>
      `).join('');

      languagesContainer.innerHTML = `
        <div>
          <h4 style="margin-bottom: 0.25rem;">${data.languages.native.name}</h4>
          <p style="color: var(--text-muted); font-size: 0.95rem;">${data.languages.native.desc}</p>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">${data.languages.english.name}</h4>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; font-size: 0.9rem;">
            ${levelsHTML}
          </div>
        </div>
      `;
    }

    // 9. Contact Info
    const contactPhone = document.getElementById('contact-phone-val');
    const contactEmail = document.getElementById('contact-email-val');
    const contactLocation = document.getElementById('contact-location-val');
    const contactLinkedin = document.getElementById('contact-linkedin-val');

    if (contactPhone) {
      contactPhone.textContent = data.contact.phone;
      contactPhone.href = `tel:${data.contact.phone.replace(/[^0-9+]/g, '')}`;
    }
    if (contactEmail) {
      contactEmail.textContent = data.contact.email;
      contactEmail.href = `mailto:${data.contact.email}`;
    }
    if (contactLocation) {
      contactLocation.textContent = data.contact.location;
    }
    if (contactLinkedin) {
      contactLinkedin.href = data.contact.linkedin;
    }

    const socialContainer = document.getElementById('social-links-container');
    if (socialContainer && data.contact.socials) {
      socialContainer.innerHTML = data.contact.socials.map(soc => `
        <a href="${soc.url}" target="_blank" class="social-btn" aria-label="${soc.platform} Profile">
          <i class="${soc.icon}"></i>
        </a>
      `).join('');
    }
  }

  // Trigger dynamic rendering on index.html
  if (document.getElementById('hero-name-val')) {
    renderDynamicData();
  }

  // ---------- Manager Button Navigation Prompt ----------

  const managerLink = document.getElementById('nav-manager-link');
  if (managerLink) {
    managerLink.addEventListener('click', (e) => {
      e.preventDefault();
      // Check if already authorized in session
      if (sessionStorage.getItem('portfolio_admin') === 'true') {
        window.location.href = 'manager.html';
        return;
      }
      
      const code = prompt("Enter security code to access Manager:");
      if (code === null) return; // User clicked Cancel
      
      const storedCode = localStorage.getItem('portfolio_security_code') || 'AbdulHaseeb@786';
      if (code.trim() === storedCode) {
        sessionStorage.setItem('portfolio_admin', 'true');
        window.location.href = 'manager.html';
      } else {
        alert("Incorrect security code! Access denied.");
      }
    });
  }

  // ==========================================================================
  // 8. SCROLL REVEAL – IntersectionObserver
  // ==========================================================================

  function observeRevealItems() {
    const revealItems = document.querySelectorAll('.reveal-item:not(.revealed)');
    
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach(item => observer.observe(item));
  }

  // Initial observation of all reveal-items already in the DOM
  observeRevealItems();
});
