/**
 * Abdul Haseeb - Portfolio Website Manager JavaScript Logic
 * Built with vanilla JavaScript for premium responsiveness and speed.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Double Security Check on Load
  if (sessionStorage.getItem('portfolio_admin') !== 'true') {
    // If not authorized, redirect immediately to home
    window.location.href = 'index.html';
    return;
  }

  // 2. Dynamic Footer Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. Tab Toggling Functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Remove active states
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      // Add active state to clicked tab
      btn.classList.add('active');
      const activePanel = document.getElementById(targetTab);
      if (activePanel) {
        activePanel.classList.add('active');
      }

      // Render messages list dynamically if switching to the messages tab
      if (targetTab === 'panel-messages') {
        renderMessagesList();
      }
    });
  });

  // ==========================================================================
  // LOCALSTORAGE SCHEMA DEFINITIONS (MATCHING script.js DEFAULT SCHEMA)
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

  // State cache variable holding active session data
  let currentPortfolioData = null;
  let currentPortfolioProjects = null;

  // Retrieve projects
  function getProjects() {
    let stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
      return JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
    }
    return JSON.parse(stored);
  }

  // Save projects
  function saveProjects(projects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    currentPortfolioProjects = projects;
  }

  // Retrieve site details
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
    return data;
  }

  // Save site details
  function savePortfolioData(data) {
    localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(data));
    currentPortfolioData = data;
  }

  // Display toast notice
  const toast = document.getElementById('save-toast');
  const toastMsg = document.getElementById('save-toast-message');
  let toastTimeout = null;

  function showToast(message, isError = false) {
    if (toastTimeout) clearTimeout(toastTimeout);
    
    toastMsg.textContent = message;
    
    if (isError) {
      toast.style.borderColor = '#f43f5e';
      toast.querySelector('i').className = 'fa-solid fa-circle-xmark';
      toast.querySelector('i').style.color = '#f43f5e';
    } else {
      toast.style.borderColor = 'var(--primary)';
      toast.querySelector('i').className = 'fa-solid fa-circle-check';
      toast.querySelector('i').style.color = 'var(--primary)';
    }

    toast.classList.add('active');

    toastTimeout = setTimeout(() => {
      toast.classList.remove('active');
    }, 3000);
  }

  // Reset to Defaults Trigger
  const btnReset = document.getElementById('btn-reset-defaults');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm("Are you sure you want to reset ALL changes back to the default portfolio data? This cannot be undone.")) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(DATA_STORAGE_KEY);
        
        showToast("Reset to default settings completed! Reloading...");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });
  }

  // Logout Trigger
  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      if (confirm("Are you sure you want to logout of the manager dashboard?")) {
        sessionStorage.removeItem('portfolio_admin');
        window.location.href = 'index.html';
      }
    });
  }

  // ==========================================================================
  // INLINE ARRAY EDITORS (RENDERERS AND HANDLERS)
  // ==========================================================================

  // --- Profile Paragraphs (About Tab) ---
  const paragraphsContainer = document.getElementById('paragraphs-list-container');
  const btnAddParagraph = document.getElementById('btn-add-paragraph');

  function renderParagraphsList() {
    if (!paragraphsContainer) return;
    paragraphsContainer.innerHTML = '';

    currentPortfolioData.about.profileParagraphs.forEach((para, index) => {
      const row = document.createElement('div');
      row.className = 'row-flex paragraph-item-row';
      row.innerHTML = `
        <textarea class="form-control para-input" placeholder="Enter paragraph text..." required style="min-height: 80px;">${para}</textarea>
        <button type="button" class="btn btn-danger btn-delete-para" data-index="${index}" title="Delete Paragraph">
          <i class="fa-solid fa-trash"></i>
        </button>
      `;
      paragraphsContainer.appendChild(row);
    });

    // Delete Event Binding
    document.querySelectorAll('.btn-delete-para').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(btn.getAttribute('data-index'));
        currentPortfolioData.about.profileParagraphs.splice(index, 1);
        renderParagraphsList();
      });
    });
  }

  if (btnAddParagraph) {
    btnAddParagraph.addEventListener('click', () => {
      currentPortfolioData.about.profileParagraphs.push('');
      renderParagraphsList();
      // Scroll to the new input
      setTimeout(() => {
        const textareas = paragraphsContainer.querySelectorAll('.para-input');
        if (textareas.length > 0) {
          textareas[textareas.length - 1].focus();
        }
      }, 50);
    });
  }

  // --- Stat Cards (About Tab) ---
  const statsContainer = document.getElementById('stats-list-container');
  const btnAddStat = document.getElementById('btn-add-stat');

  function renderStatsList() {
    if (!statsContainer) return;
    statsContainer.innerHTML = '';

    currentPortfolioData.about.stats.forEach((stat, index) => {
      const row = document.createElement('div');
      row.className = 'row-flex stat-item-row';
      row.innerHTML = `
        <input type="text" class="form-control stat-num-input" value="${stat.num}" placeholder="Number (e.g. 4+)" required style="max-width: 120px;">
        <input type="text" class="form-control stat-label-input" value="${stat.label}" placeholder="Label description (e.g. Apps Built)" required>
        <button type="button" class="btn btn-danger btn-delete-stat" data-index="${index}" title="Delete Stat">
          <i class="fa-solid fa-trash"></i>
        </button>
      `;
      statsContainer.appendChild(row);
    });

    // Delete Event Binding
    document.querySelectorAll('.btn-delete-stat').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        currentPortfolioData.about.stats.splice(index, 1);
        renderStatsList();
      });
    });
  }

  if (btnAddStat) {
    btnAddStat.addEventListener('click', () => {
      currentPortfolioData.about.stats.push({ num: '', label: '' });
      renderStatsList();
    });
  }

  // --- Hobbies (Interests Tab) ---
  const hobbiesContainer = document.getElementById('hobbies-list-container');
  const btnAddHobby = document.getElementById('btn-add-hobby');

  function renderHobbiesList() {
    if (!hobbiesContainer) return;
    hobbiesContainer.innerHTML = '';

    currentPortfolioData.hobbies.forEach((hobby, index) => {
      const row = document.createElement('div');
      row.className = 'row-flex hobby-item-row';
      row.innerHTML = `
        <input type="text" class="form-control hobby-input" value="${hobby}" placeholder="e.g. Hiking, Video games" required>
        <button type="button" class="btn btn-danger btn-delete-hobby" data-index="${index}" title="Delete Hobby">
          <i class="fa-solid fa-trash"></i>
        </button>
      `;
      hobbiesContainer.appendChild(row);
    });

    // Delete Event Binding
    document.querySelectorAll('.btn-delete-hobby').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        currentPortfolioData.hobbies.splice(index, 1);
        renderHobbiesList();
      });
    });
  }

  if (btnAddHobby) {
    btnAddHobby.addEventListener('click', () => {
      currentPortfolioData.hobbies.push('');
      renderHobbiesList();
      setTimeout(() => {
        const inputs = hobbiesContainer.querySelectorAll('.hobby-input');
        if (inputs.length > 0) {
          inputs[inputs.length - 1].focus();
        }
      }, 50);
    });
  }

  // --- Social Media Channels (Hero & Contact Tab) ---
  const socialsContainer = document.getElementById('socials-list-container');
  const btnAddSocial = document.getElementById('btn-add-social');

  // Preloaded platform icons map
  const PLATFORM_ICONS = {
    "LinkedIn": "fa-brands fa-linkedin-in",
    "TikTok": "fa-brands fa-tiktok",
    "Facebook": "fa-brands fa-facebook-f",
    "Instagram": "fa-brands fa-instagram",
    "Twitter/X": "fa-brands fa-x-twitter",
    "YouTube": "fa-brands fa-youtube",
    "WhatsApp": "fa-brands fa-whatsapp",
    "Snapchat": "fa-brands fa-snapchat",
    "Discord": "fa-brands fa-discord",
    "Reddit": "fa-brands fa-reddit-alien",
    "Pinterest": "fa-brands fa-pinterest-p"
  };

  function renderSocialsList() {
    if (!socialsContainer) return;
    socialsContainer.innerHTML = '';

    if (!currentPortfolioData.contact.socials) {
      currentPortfolioData.contact.socials = [];
    }

    currentPortfolioData.contact.socials.forEach((soc, index) => {
      const row = document.createElement('div');
      row.className = 'row-flex social-item-row';
      
      const isPreloaded = Object.prototype.hasOwnProperty.call(PLATFORM_ICONS, soc.platform);
      const selectedValue = isPreloaded ? soc.platform : "Other";
      const customValue = isPreloaded ? "" : soc.platform;
      const customStyle = isPreloaded ? "display: none;" : "display: block;";
      
      let optionsHTML = '';
      Object.keys(PLATFORM_ICONS).forEach(p => {
        optionsHTML += `<option value="${p}" ${selectedValue === p ? 'selected' : ''}>${p}</option>`;
      });
      optionsHTML += `<option value="Other" ${selectedValue === "Other" ? 'selected' : ''}>Other / Custom</option>`;

      row.innerHTML = `
        <select class="form-control social-platform-select" aria-label="Select Platform">
          ${optionsHTML}
        </select>
        <input type="text" class="form-control social-platform-custom-input" value="${customValue}" placeholder="Platform Name (e.g. GitHub)" style="${customStyle}" ${selectedValue === "Other" ? "required" : ""}>
        <input type="text" class="form-control social-icon-input" value="${soc.icon}" placeholder="Icon (e.g. fa-brands fa-github)" required>
        <input type="url" class="form-control social-url-input" value="${soc.url}" placeholder="URL (e.g. https://...)" required>
        <div class="social-item-row-actions">
          <div class="social-icon-preview ${soc.icon ? 'active' : ''}" title="Icon Preview">
            <i class="${soc.icon || 'fa-solid fa-globe'}"></i>
          </div>
          <button type="button" class="btn btn-danger btn-delete-social" data-index="${index}" title="Delete Social Channel">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
      socialsContainer.appendChild(row);

      // Bind dynamic row elements and live interactive preview
      const select = row.querySelector('.social-platform-select');
      const customInput = row.querySelector('.social-platform-custom-input');
      const iconInput = row.querySelector('.social-icon-input');
      const iconPreview = row.querySelector('.social-icon-preview');
      const previewIcon = iconPreview.querySelector('i');

      select.addEventListener('change', () => {
        const val = select.value;
        if (val !== "Other") {
          customInput.style.display = 'none';
          customInput.value = '';
          customInput.removeAttribute('required');
          
          const iconClass = PLATFORM_ICONS[val];
          iconInput.value = iconClass;
          previewIcon.className = iconClass;
          iconPreview.classList.add('active');

          // Smooth micro-animation on change
          iconPreview.style.transform = 'scale(1.25)';
          setTimeout(() => {
            iconPreview.style.transform = '';
          }, 250);
        } else {
          customInput.style.display = 'block';
          customInput.setAttribute('required', 'required');
          customInput.value = '';
          customInput.focus();
          
          iconInput.value = '';
          previewIcon.className = 'fa-solid fa-globe';
          iconPreview.classList.remove('active');
        }
      });

      iconInput.addEventListener('input', () => {
        const val = iconInput.value.trim();
        if (val) {
          previewIcon.className = val;
          iconPreview.classList.add('active');
        } else {
          previewIcon.className = 'fa-solid fa-globe';
          iconPreview.classList.remove('active');
        }
      });
    });

    // Delete Event Binding
    socialsContainer.querySelectorAll('.btn-delete-social').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        currentPortfolioData.contact.socials.splice(index, 1);
        renderSocialsList();
      });
    });
  }

  if (btnAddSocial) {
    btnAddSocial.addEventListener('click', () => {
      if (!currentPortfolioData.contact.socials) {
        currentPortfolioData.contact.socials = [];
      }
      currentPortfolioData.contact.socials.push({
        platform: 'LinkedIn',
        icon: 'fa-brands fa-linkedin-in',
        url: ''
      });
      renderSocialsList();
      setTimeout(() => {
        const rows = socialsContainer.querySelectorAll('.social-item-row');
        if (rows.length > 0) {
          const lastRow = rows[rows.length - 1];
          const urlInput = lastRow.querySelector('.social-url-input');
          if (urlInput) urlInput.focus();
        }
      }, 50);
    });
  }


  // ==========================================================================
  // DIALOG MODALS FOR LIST EDITING (SKILLS, EDUCATION, EXPERIENCE)
  // ==========================================================================
  const itemModal = document.getElementById('item-modal');
  const itemForm = document.getElementById('form-item-modal');
  const itemModalTitle = document.getElementById('item-modal-title');
  
  // Field groups
  const groupTitle = document.getElementById('group-item-title');
  const labelTitle = document.getElementById('label-item-title');
  const groupSubtitle = document.getElementById('group-item-subtitle');
  const labelSubtitle = document.getElementById('label-item-subtitle');
  const groupDate = document.getElementById('group-item-date');
  const groupIcon = document.getElementById('group-item-icon');
  const groupDesc = document.getElementById('group-item-desc');
  const groupBullets = document.getElementById('group-item-bullets');

  // Input elements
  const inputType = document.getElementById('item-type');
  const inputIndex = document.getElementById('item-index');
  const inputTitle = document.getElementById('item-title');
  const inputSubtitle = document.getElementById('item-subtitle');
  const inputDate = document.getElementById('item-date');
  const inputIcon = document.getElementById('item-icon');
  const inputDesc = document.getElementById('item-desc');
  const inputBullets = document.getElementById('item-bullets');

  // Open item modal helper
  function openItemModal(type, index = -1) {
    inputType.value = type;
    inputIndex.value = index;
    itemForm.reset();

    // Hide all optional fields by default
    groupTitle.style.display = 'block';
    groupSubtitle.style.display = 'none';
    groupDate.style.display = 'none';
    groupIcon.style.display = 'none';
    groupDesc.style.display = 'none';
    groupBullets.style.display = 'none';

    // Toggle fields based on type
    if (type === 'skill') {
      labelTitle.textContent = "Skill Title / Name";
      groupIcon.style.display = 'block';
      groupDesc.style.display = 'block';
      
      itemModalTitle.textContent = index === -1 ? "Add New Skill Card" : "Edit Skill Card";
      
      if (index !== -1) {
        const item = currentPortfolioData.skills[index];
        inputTitle.value = item.title;
        inputIcon.value = item.icon;
        inputDesc.value = item.desc;
      }
    } 
    else if (type === 'education') {
      labelTitle.textContent = "Degree / Course Title";
      labelSubtitle.textContent = "School / College / Institution";
      groupSubtitle.style.display = 'block';
      groupDate.style.display = 'block';
      groupDesc.style.display = 'block';
      
      itemModalTitle.textContent = index === -1 ? "Add New Academic Entry" : "Edit Academic Entry";
      
      if (index !== -1) {
        const item = currentPortfolioData.about.timeline[index];
        inputTitle.value = item.title;
        inputSubtitle.value = item.institution;
        inputDate.value = item.date;
        inputDesc.value = item.desc;
      }
    } 
    else if (type === 'experience') {
      labelTitle.textContent = "Job Title / Role";
      labelSubtitle.textContent = "Company / Employer Name";
      groupSubtitle.style.display = 'block';
      groupDate.style.display = 'block';
      groupIcon.style.display = 'block';
      groupBullets.style.display = 'block';
      
      itemModalTitle.textContent = index === -1 ? "Add New Work History" : "Edit Work History";
      
      if (index !== -1) {
        const item = currentPortfolioData.experience[index];
        inputTitle.value = item.role;
        inputSubtitle.value = item.company;
        inputDate.value = item.date;
        inputIcon.value = item.icon;
        inputBullets.value = item.details.join('\n');
      }
    }

    itemModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeItemModal() {
    itemModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Cancel controls
  document.getElementById('btn-close-item-modal').addEventListener('click', closeItemModal);
  document.getElementById('btn-cancel-item-modal').addEventListener('click', closeItemModal);

  // Close when clicking outside content wrapper
  itemModal.addEventListener('click', (e) => {
    if (e.target === itemModal) closeItemModal();
  });

  // Modal form submit handler
  itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = inputType.value;
    const index = parseInt(inputIndex.value);

    if (type === 'skill') {
      const skillObj = {
        title: inputTitle.value.trim(),
        icon: inputIcon.value.trim() || 'fa-solid fa-cube',
        desc: inputDesc.value.trim()
      };
      
      if (index === -1) {
        currentPortfolioData.skills.push(skillObj);
      } else {
        currentPortfolioData.skills[index] = skillObj;
      }
      savePortfolioData(currentPortfolioData);
      renderSkillsList();
    } 
    else if (type === 'education') {
      const eduObj = {
        title: inputTitle.value.trim(),
        institution: inputSubtitle.value.trim(),
        date: inputDate.value.trim(),
        desc: inputDesc.value.trim()
      };
      
      if (index === -1) {
        currentPortfolioData.about.timeline.push(eduObj);
      } else {
        currentPortfolioData.about.timeline[index] = eduObj;
      }
      savePortfolioData(currentPortfolioData);
      renderEducationTimeline();
    } 
    else if (type === 'experience') {
      // Split bullets by newline and remove empty lines
      const detailsArray = inputBullets.value.split('\n')
                                         .map(line => line.trim())
                                         .filter(line => line.length > 0);
                                         
      if (detailsArray.length === 0) {
        alert("Please add at least one detail or achievement line.");
        return;
      }

      const expObj = {
        role: inputTitle.value.trim(),
        company: inputSubtitle.value.trim(),
        date: inputDate.value.trim(),
        icon: inputIcon.value.trim() || 'fa-solid fa-briefcase',
        details: detailsArray
      };
      
      if (index === -1) {
        currentPortfolioData.experience.push(expObj);
      } else {
        currentPortfolioData.experience[index] = expObj;
      }
      savePortfolioData(currentPortfolioData);
      renderExperienceTimeline();
    }

    closeItemModal();
    showToast("Item saved successfully!");
  });

  // --- Education Timeline Render (About Tab) ---
  const educationContainer = document.getElementById('education-list-container');
  const btnAddEducation = document.getElementById('btn-add-education');

  function renderEducationTimeline() {
    if (!educationContainer) return;
    educationContainer.innerHTML = '';

    currentPortfolioData.about.timeline.forEach((edu, index) => {
      const card = document.createElement('div');
      card.className = 'list-item-card';
      card.innerHTML = `
        <div class="list-item-info">
          <h4>${edu.title}</h4>
          <p><strong>${edu.institution}</strong> (${edu.date})</p>
          <p style="margin-top: 0.25rem;">${edu.desc}</p>
        </div>
        <div class="list-item-actions">
          <button type="button" class="editor-btn btn-edit btn-edit-edu" data-index="${index}">
            <i class="fa-solid fa-pen-to-square"></i> Edit
          </button>
          <button type="button" class="editor-btn btn-danger btn-delete-edu" data-index="${index}">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </div>
      `;
      educationContainer.appendChild(card);
    });

    // Bind Edit and Delete Listeners
    document.querySelectorAll('.btn-edit-edu').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        openItemModal('education', index);
      });
    });

    document.querySelectorAll('.btn-delete-edu').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        if (confirm("Are you sure you want to delete this educational entry?")) {
          currentPortfolioData.about.timeline.splice(index, 1);
          savePortfolioData(currentPortfolioData);
          renderEducationTimeline();
          showToast("Educational entry deleted.");
        }
      });
    });
  }

  if (btnAddEducation) {
    btnAddEducation.addEventListener('click', () => {
      openItemModal('education');
    });
  }

  // --- Core Skills Render (Skills Tab) ---
  const skillsContainer = document.getElementById('skills-list-container');
  const btnAddSkill = document.getElementById('btn-add-skill');

  function renderSkillsList() {
    if (!skillsContainer) return;
    skillsContainer.innerHTML = '';

    currentPortfolioData.skills.forEach((skill, index) => {
      const card = document.createElement('div');
      card.className = 'list-item-card';
      card.innerHTML = `
        <div class="list-item-info">
          <h4><i class="${skill.icon}" style="color: var(--primary); margin-right: 0.5rem;"></i> ${skill.title}</h4>
          <p>${skill.desc}</p>
        </div>
        <div class="list-item-actions">
          <button type="button" class="editor-btn btn-edit btn-edit-skill" data-index="${index}">
            <i class="fa-solid fa-pen-to-square"></i> Edit
          </button>
          <button type="button" class="editor-btn btn-danger btn-delete-skill" data-index="${index}">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </div>
      `;
      skillsContainer.appendChild(card);
    });

    // Bind Edit & Delete
    document.querySelectorAll('.btn-edit-skill').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        openItemModal('skill', index);
      });
    });

    document.querySelectorAll('.btn-delete-skill').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        if (confirm("Are you sure you want to delete this skill card?")) {
          currentPortfolioData.skills.splice(index, 1);
          savePortfolioData(currentPortfolioData);
          renderSkillsList();
          showToast("Skill card deleted.");
        }
      });
    });
  }

  if (btnAddSkill) {
    btnAddSkill.addEventListener('click', () => {
      openItemModal('skill');
    });
  }

  // --- Work Experience Timeline (Experience Tab) ---
  const experienceContainer = document.getElementById('experience-list-container');
  const btnAddExperience = document.getElementById('btn-add-experience');

  function renderExperienceTimeline() {
    if (!experienceContainer) return;
    experienceContainer.innerHTML = '';

    currentPortfolioData.experience.forEach((exp, index) => {
      const card = document.createElement('div');
      card.className = 'list-item-card';
      card.innerHTML = `
        <div class="list-item-info">
          <h4>${exp.role}</h4>
          <p><strong>${exp.company}</strong> (${exp.date})</p>
          <p style="margin-top: 0.25rem;">${exp.details.length} bullets listed</p>
        </div>
        <div class="list-item-actions">
          <button type="button" class="editor-btn btn-edit btn-edit-exp" data-index="${index}">
            <i class="fa-solid fa-pen-to-square"></i> Edit
          </button>
          <button type="button" class="editor-btn btn-danger btn-delete-exp" data-index="${index}">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </div>
      `;
      experienceContainer.appendChild(card);
    });

    // Bind Edit & Delete
    document.querySelectorAll('.btn-edit-exp').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        openItemModal('experience', index);
      });
    });

    document.querySelectorAll('.btn-delete-exp').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        if (confirm("Are you sure you want to delete this work history entry?")) {
          currentPortfolioData.experience.splice(index, 1);
          savePortfolioData(currentPortfolioData);
          renderExperienceTimeline();
          showToast("Work history entry deleted.");
        }
      });
    });
  }

  if (btnAddExperience) {
    btnAddExperience.addEventListener('click', () => {
      openItemModal('experience');
    });
  }


  // ==========================================================================
  // PROJECTS CATALOG MANAGEMENT & PROJECT EDITOR MODAL
  // ==========================================================================
  const projectModal = document.getElementById('project-modal');
  const projectForm = document.getElementById('form-project-modal');
  const projectModalTitle = document.getElementById('project-modal-title');
  const projectIndexInput = document.getElementById('project-index');

  // Form Fields
  const inputProjTitle = document.getElementById('project-title');
  const inputProjDate = document.getElementById('project-date');
  const inputProjDesc = document.getElementById('project-desc');
  const inputProjTags = document.getElementById('project-tags');
  
  // Media uploads & URL fields
  const fileUpload = document.getElementById('project-file-upload');
  const urlInput = document.getElementById('project-img-url-input');
  const btnAddImgUrl = document.getElementById('btn-add-img-url');
  const thumbsContainer = document.getElementById('project-thumbs-container');

  // Temp local list representing images of the active project in modal editor
  let modalProjectImages = [];

  function openProjectModal(index = -1) {
    projectIndexInput.value = index;
    projectForm.reset();
    urlInput.value = '';
    
    if (index === -1) {
      projectModalTitle.textContent = "Add New Project";
      modalProjectImages = [];
    } else {
      projectModalTitle.textContent = "Edit Project";
      const proj = currentPortfolioProjects[index];
      inputProjTitle.value = proj.title;
      inputProjDate.value = proj.date;
      inputProjDesc.value = proj.desc;
      inputProjTags.value = proj.tags.join(', ');
      modalProjectImages = [...proj.images];
    }
    
    renderProjectThumbs();
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.getElementById('btn-close-project-modal').addEventListener('click', closeProjectModal);
  document.getElementById('btn-cancel-project-modal').addEventListener('click', closeProjectModal);
  
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  // Render project thumbnails inside modal
  function renderProjectThumbs() {
    if (!thumbsContainer) return;
    thumbsContainer.innerHTML = '';

    modalProjectImages.forEach((imgSrc, idx) => {
      const thumb = document.createElement('div');
      thumb.className = 'thumb-wrapper';
      thumb.innerHTML = `
        <img src="${imgSrc}" alt="Project preview">
        <button type="button" class="thumb-delete-btn" data-index="${idx}" title="Remove Image">&times;</button>
      `;
      thumbsContainer.appendChild(thumb);
    });

    // Bind thumbnail removal buttons
    thumbsContainer.querySelectorAll('.thumb-delete-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        modalProjectImages.splice(idx, 1);
        renderProjectThumbs();
      });
    });
  }

  // Add Image by URL
  if (btnAddImgUrl) {
    btnAddImgUrl.addEventListener('click', () => {
      const url = urlInput.value.trim();
      if (!url) {
        showToast("Please enter an image filename or URL.", true);
        return;
      }
      modalProjectImages.push(url);
      urlInput.value = '';
      renderProjectThumbs();
      urlInput.focus();
    });
  }

  // Handle enter key in URL input
  if (urlInput) {
    urlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        btnAddImgUrl.click();
      }
    });
  }

  // Add Image by Local File Upload (Base64 encoding)
  if (fileUpload) {
    fileUpload.addEventListener('change', (e) => {
      const files = Array.from(e.target.files);
      if (files.length === 0) return;

      let loadedCount = 0;
      files.forEach(file => {
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        const fileExt = file.name.split('.').pop().toLowerCase();
        if (!file.type.startsWith('image/') && !allowedExtensions.includes(fileExt)) {
          showToast("Unsupported file type skipped. Please use JPG, PNG, or GIF.", true);
          return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          modalProjectImages.push(event.target.result);
          loadedCount++;
          
          if (loadedCount === files.length) {
            renderProjectThumbs();
            fileUpload.value = ''; // Reset file input
          }
        };
        reader.readAsDataURL(file);
      });
    });
  }

  // Project Modal Form Submit
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const index = parseInt(projectIndexInput.value);

    if (modalProjectImages.length === 0) {
      alert("Please add at least one cover image for this project (upload a file or input a URL).");
      return;
    }

    const title = inputProjTitle.value.trim();
    const date = inputProjDate.value.trim();
    const desc = inputProjDesc.value.trim();
    
    // Parse comma tags
    const tags = inputProjTags.value.split(',')
                                    .map(t => t.trim())
                                    .filter(t => t.length > 0);

    const projectObj = {
      title,
      date,
      desc,
      tags,
      images: modalProjectImages
    };

    if (index === -1) {
      currentPortfolioProjects.push(projectObj);
    } else {
      currentPortfolioProjects[index] = projectObj;
    }

    saveProjects(currentPortfolioProjects);
    renderProjectsCatalog();
    closeProjectModal();
    showToast("Project saved successfully!");
  });

  // --- Render Projects Catalog Panel ---
  const projectsContainer = document.getElementById('projects-list-container');
  const btnAddProject = document.getElementById('btn-add-project');

  function renderProjectsCatalog() {
    if (!projectsContainer) return;
    projectsContainer.innerHTML = '';

    currentPortfolioProjects.forEach((proj, index) => {
      const imagesAttr = proj.images.join(', ');
      const card = document.createElement('div');
      card.className = 'list-item-card';
      card.innerHTML = `
        <div class="list-item-info" style="display: flex; gap: 1rem; align-items: center;">
          <img src="${proj.images[0]}" style="width: 50px; height: 50px; border-radius: 6px; object-fit: cover; border: 1px solid var(--border-color); flex-shrink: 0;">
          <div style="overflow:hidden;">
            <h4>${proj.title}</h4>
            <p><strong>${proj.date}</strong> | ${proj.desc}</p>
          </div>
        </div>
        <div class="list-item-actions">
          <button type="button" class="editor-btn btn-edit btn-edit-proj" data-index="${index}">
            <i class="fa-solid fa-pen-to-square"></i> Edit
          </button>
          <button type="button" class="editor-btn btn-danger btn-delete-proj" data-index="${index}">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </div>
      `;
      projectsContainer.appendChild(card);
    });

    // Bind Edit and Delete Project Listeners
    document.querySelectorAll('.btn-edit-proj').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        openProjectModal(index);
      });
    });

    document.querySelectorAll('.btn-delete-proj').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        if (confirm(`Are you sure you want to delete the project "${currentPortfolioProjects[index].title}"? This cannot be undone.`)) {
          currentPortfolioProjects.splice(index, 1);
          saveProjects(currentPortfolioProjects);
          renderProjectsCatalog();
          showToast("Project deleted successfully.");
        }
      });
    });
  }

  if (btnAddProject) {
    btnAddProject.addEventListener('click', () => {
      openProjectModal();
    });
  }

  // ==========================================================================
  // DIRECT SAVE HANDLERS FOR FULL FORMS (HERO & INTERESTS)
  // ==========================================================================

  // --- Hero & Contact Form Save ---
  function saveHeroAndContact() {
    const tag = document.getElementById('hero-tag').value.trim();
    const name = document.getElementById('hero-name').value.trim();
    const desc = document.getElementById('hero-desc').value.trim();
    
    // Parse typing words by line breaks
    const typingTextarea = document.getElementById('hero-typing').value;
    const typingWords = typingTextarea.split('\n')
                                      .map(w => w.trim())
                                      .filter(w => w.length > 0);

    const phone = document.getElementById('contact-phone').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const location = document.getElementById('contact-location').value.trim();
    const linkedin = document.getElementById('contact-linkedin').value.trim();

    // Validation
    if (!name || !desc || !email || !location) {
      showToast("Please fill in all required fields (Name, Description, Email, Location).", true);
      return;
    }

    // Read Socials from UI
    const socialRows = socialsContainer.querySelectorAll('.social-item-row');
    const newSocials = [];
    socialRows.forEach(row => {
      const select = row.querySelector('.social-platform-select');
      const customInput = row.querySelector('.social-platform-custom-input');
      const icon = row.querySelector('.social-icon-input').value.trim();
      const url = row.querySelector('.social-url-input').value.trim();
      
      let platform = '';
      if (select && select.value === "Other") {
        platform = customInput ? customInput.value.trim() : '';
      } else if (select) {
        platform = select.value;
      }

      if (platform && icon && url) {
        newSocials.push({ platform, icon, url });
      }
    });

    // Update Cache
    currentPortfolioData.hero.avatar = document.getElementById('profile-pic-url-input').value.trim() || 'haseebimg.jpeg';
    currentPortfolioData.hero.tag = tag;
    currentPortfolioData.hero.name = name;
    currentPortfolioData.hero.desc = desc;
    currentPortfolioData.hero.typingWords = typingWords;

    currentPortfolioData.contact.phone = phone;
    currentPortfolioData.contact.email = email;
    currentPortfolioData.contact.location = location;
    currentPortfolioData.contact.linkedin = linkedin;
    currentPortfolioData.contact.socials = newSocials;

    savePortfolioData(currentPortfolioData);
    
    // Re-render socials list to sync
    renderSocialsList();
    showToast("Hero and Contact settings saved successfully!");
  }

  // --- About Profile Paragraphs & Stats Save ---
  function saveAboutAndStats() {
    // 1. Paragraphs
    const paraTextareas = paragraphsContainer.querySelectorAll('.para-input');
    const newParagraphs = [];
    paraTextareas.forEach(ta => {
      const val = ta.value.trim();
      if (val) newParagraphs.push(val);
    });

    if (newParagraphs.length === 0) {
      showToast("Please write at least one profile paragraph.", true);
      return;
    }

    // 2. Stats
    const statNumInputs = statsContainer.querySelectorAll('.stat-num-input');
    const statLabelInputs = statsContainer.querySelectorAll('.stat-label-input');
    const newStats = [];

    for (let i = 0; i < statNumInputs.length; i++) {
      const num = statNumInputs[i].value.trim();
      const label = statLabelInputs[i].value.trim();
      if (num && label) {
        newStats.push({ num, label });
      }
    }

    currentPortfolioData.about.profileParagraphs = newParagraphs;
    currentPortfolioData.about.stats = newStats;

    savePortfolioData(currentPortfolioData);
    
    // Re-render lists to clean up empty deleted slots
    renderParagraphsList();
    renderStatsList();

    showToast("Profile descriptions and stats saved successfully!");
  }

  // --- Hobbies & Languages Form Save ---
  function saveHobbiesAndLanguages() {
    // Hobbies
    const hobbyInputs = hobbiesContainer.querySelectorAll('.hobby-input');
    const newHobbies = [];
    hobbyInputs.forEach(input => {
      const val = input.value.trim();
      if (val) newHobbies.push(val);
    });

    // Native language
    const nativeName = document.getElementById('lang-native-name').value.trim();
    const nativeDesc = document.getElementById('lang-native-desc').value.trim();

    // English language
    const englishName = document.getElementById('lang-english-name').value.trim();
    const levelReading = document.getElementById('lang-level-reading').value.trim();
    const levelListening = document.getElementById('lang-level-listening').value.trim();
    const levelWriting = document.getElementById('lang-level-writing').value.trim();
    const levelSpeaking = document.getElementById('lang-level-speaking').value.trim();

    if (!nativeName || !nativeDesc || !englishName) {
      showToast("Please fill in Language names and descriptions.", true);
      return;
    }

    // Update Cache
    currentPortfolioData.hobbies = newHobbies;
    
    currentPortfolioData.languages.native.name = nativeName;
    currentPortfolioData.languages.native.desc = nativeDesc;
    
    currentPortfolioData.languages.english.name = englishName;
    currentPortfolioData.languages.english.levels = [
      { label: "Reading", val: levelReading },
      { label: "Listening", val: levelListening },
      { label: "Writing", val: levelWriting },
      { label: "Speaking", val: levelSpeaking }
    ];

    savePortfolioData(currentPortfolioData);
    
    // Re-render hobbies to sync
    renderHobbiesList();
    showToast("Hobbies and Languages saved successfully!");
  }

  // Bind Save Buttons to their respective save functions
  const saveButtons = document.querySelectorAll('.save-btn');
  saveButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const formId = btn.getAttribute('data-form');
      if (formId === 'form-hero') {
        saveHeroAndContact();
      } else if (formId === 'form-about') {
        saveAboutAndStats();
      } else if (formId === 'form-interests') {
        saveHobbiesAndLanguages();
      }
    });
  });

  // ==========================================================================
  // INITIAL DATA POPULATION
  // ==========================================================================

  function loadFormData() {
    currentPortfolioData = getPortfolioData();
    currentPortfolioProjects = getProjects();

    // 1. Populate Hero & Contact Tab
    document.getElementById('hero-tag').value = currentPortfolioData.hero.tag;
    document.getElementById('hero-name').value = currentPortfolioData.hero.name;
    document.getElementById('hero-desc').value = currentPortfolioData.hero.desc;
    document.getElementById('hero-typing').value = currentPortfolioData.hero.typingWords.join('\n');

    // Populate profile pic preview and URL field
    const avatar = currentPortfolioData.hero.avatar || 'haseebimg.jpeg';
    const profilePicUrlInput = document.getElementById('profile-pic-url-input');
    const managerAvatarPreview = document.getElementById('manager-avatar-preview');
    if (profilePicUrlInput) {
      profilePicUrlInput.value = avatar;
    }
    if (managerAvatarPreview) {
      managerAvatarPreview.src = avatar;
    }

    document.getElementById('contact-phone').value = currentPortfolioData.contact.phone;
    document.getElementById('contact-email').value = currentPortfolioData.contact.email;
    document.getElementById('contact-location').value = currentPortfolioData.contact.location;
    document.getElementById('contact-linkedin').value = currentPortfolioData.contact.linkedin;
    renderSocialsList();

    // 2. Render About Paragraphs & Stats lists
    renderParagraphsList();
    renderStatsList();
    renderEducationTimeline();

    // 3. Render Skills Cards list
    renderSkillsList();

    // 4. Render Projects Catalog
    renderProjectsCatalog();

    // 5. Render Work Experience Timeline
    renderExperienceTimeline();

    // 6. Populate Hobbies & Languages Tab
    renderHobbiesList();
    
    document.getElementById('lang-native-name').value = currentPortfolioData.languages.native.name;
    document.getElementById('lang-native-desc').value = currentPortfolioData.languages.native.desc;
    
    document.getElementById('lang-english-name').value = currentPortfolioData.languages.english.name;
    
    const levels = currentPortfolioData.languages.english.levels;
    const readLvl = levels.find(l => l.label === 'Reading');
    const listLvl = levels.find(l => l.label === 'Listening');
    const writLvl = levels.find(l => l.label === 'Writing');
    const speakLvl = levels.find(l => l.label === 'Speaking');

    document.getElementById('lang-level-reading').value = readLvl ? readLvl.val : '';
    document.getElementById('lang-level-listening').value = listLvl ? listLvl.val : '';
    document.getElementById('lang-level-writing').value = writLvl ? writLvl.val : '';
    document.getElementById('lang-level-speaking').value = speakLvl ? speakLvl.val : '';
  }

  // --- Profile Picture Upload & Management ---
  const profilePicFileInput = document.getElementById('profile-pic-file-input');
  const btnUploadProfilePic = document.getElementById('btn-upload-profile-pic');
  const btnRemoveProfilePic = document.getElementById('btn-remove-profile-pic');
  const profilePicUrlInput = document.getElementById('profile-pic-url-input');
  const btnUpdateProfilePicUrl = document.getElementById('btn-update-profile-pic-url');
  const managerAvatarPreview = document.getElementById('manager-avatar-preview');

  if (btnUploadProfilePic && profilePicFileInput) {
    btnUploadProfilePic.addEventListener('click', () => {
      profilePicFileInput.click();
    });
  }

  if (profilePicFileInput) {
    profilePicFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
      const fileExt = file.name.split('.').pop().toLowerCase();
      if (!file.type.startsWith('image/') && !allowedExtensions.includes(fileExt)) {
        showToast("Unsupported file type. Please upload a JPG, PNG, or GIF.", true);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Url = event.target.result;
        if (managerAvatarPreview) {
          managerAvatarPreview.src = base64Url;
        }
        if (profilePicUrlInput) {
          profilePicUrlInput.value = base64Url;
        }
        if (currentPortfolioData && currentPortfolioData.hero) {
          currentPortfolioData.hero.avatar = base64Url;
        }
        showToast("Local profile picture loaded. Click 'Save Changes' to apply.");
      };
      reader.readAsDataURL(file);
    });
  }

  if (btnRemoveProfilePic) {
    btnRemoveProfilePic.addEventListener('click', () => {
      if (confirm("Are you sure you want to remove your profile photo?")) {
        const defaultAvatar = 'haseebimg.jpeg';
        if (managerAvatarPreview) {
          managerAvatarPreview.src = defaultAvatar;
        }
        if (profilePicUrlInput) {
          profilePicUrlInput.value = defaultAvatar;
        }
        if (currentPortfolioData && currentPortfolioData.hero) {
          currentPortfolioData.hero.avatar = defaultAvatar;
        }
        showToast("Profile photo removed. Click 'Save Changes' to apply.");
      }
    });
  }

  if (btnUpdateProfilePicUrl && profilePicUrlInput) {
    btnUpdateProfilePicUrl.addEventListener('click', () => {
      const url = profilePicUrlInput.value.trim();
      if (!url) {
        showToast("Please enter an image filename or URL.", true);
        return;
      }
      if (managerAvatarPreview) {
        managerAvatarPreview.src = url;
      }
      if (currentPortfolioData && currentPortfolioData.hero) {
        currentPortfolioData.hero.avatar = url;
      }
      showToast("Profile photo URL set. Click 'Save Changes' to apply.");
    });
  }

  // --- Password Toggle Buttons ---
  const toggleButtons = document.querySelectorAll('.password-toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      const icon = btn.querySelector('i');
      if (input && icon) {
        if (input.type === 'password') {
          input.type = 'text';
          icon.className = 'fa-solid fa-eye-slash';
        } else {
          input.type = 'password';
          icon.className = 'fa-solid fa-eye';
        }
      }
    });
  });

  // --- Password Update Action ---
  const btnUpdatePassword = document.getElementById('btn-update-password');
  const passwordFeedback = document.getElementById('security-password-feedback');

  if (btnUpdatePassword) {
    btnUpdatePassword.addEventListener('click', () => {
      const oldPass = document.getElementById('security-old-password').value;
      const newPass = document.getElementById('security-new-password').value;
      const confirmPass = document.getElementById('security-confirm-password').value;

      if (!oldPass || !newPass || !confirmPass) {
        if (passwordFeedback) {
          passwordFeedback.className = 'security-feedback error';
          passwordFeedback.textContent = 'All password fields are required.';
        }
        return;
      }

      const storedCode = localStorage.getItem('portfolio_security_code') || 'AbdulHaseeb@786';
      if (oldPass !== storedCode) {
        if (passwordFeedback) {
          passwordFeedback.className = 'security-feedback error';
          passwordFeedback.textContent = 'Incorrect current password.';
        }
        showToast("Password update failed: Incorrect current password.", true);
        return;
      }

      if (newPass.length < 4) {
        if (passwordFeedback) {
          passwordFeedback.className = 'security-feedback error';
          passwordFeedback.textContent = 'New password must be at least 4 characters long.';
        }
        showToast("Password update failed: Password too short.", true);
        return;
      }

      if (newPass !== confirmPass) {
        if (passwordFeedback) {
          passwordFeedback.className = 'security-feedback error';
          passwordFeedback.textContent = 'New passwords do not match.';
        }
        showToast("Password update failed: Passwords do not match.", true);
        return;
      }

      // Success
      localStorage.setItem('portfolio_security_code', newPass);
      if (passwordFeedback) {
        passwordFeedback.className = 'security-feedback success';
        passwordFeedback.textContent = 'Password updated successfully!';
      }
      showToast("Password updated successfully");

      // Clear input fields
      document.getElementById('security-old-password').value = '';
      document.getElementById('security-new-password').value = '';
      document.getElementById('security-confirm-password').value = '';

      // Reset eye icons to standard view
      document.querySelectorAll('.password-toggle-btn i').forEach(icon => {
        icon.className = 'fa-solid fa-eye';
      });
      document.querySelectorAll('.password-input-wrapper input').forEach(input => {
        input.type = 'password';
      });
    });
  }

  // ==========================================================================
  // CONTACT MESSAGES MANAGEMENT (LOCAL STORAGE BACKUP INBOX)
  // ==========================================================================

  const MESSAGES_KEY = 'portfolio_messages';
  const messagesContainer = document.getElementById('messages-list-container');
  const btnClearAllMessages = document.getElementById('btn-clear-all-messages');
  const messagesBadge = document.getElementById('messages-counter-badge');

  function updateMessagesBadge(count) {
    if (!messagesBadge) return;
    if (count > 0) {
      messagesBadge.textContent = count;
      messagesBadge.style.display = 'inline-block';
    } else {
      messagesBadge.style.display = 'none';
    }
  }

  function renderMessagesList() {
    if (!messagesContainer) return;

    const messages = JSON.parse(localStorage.getItem(MESSAGES_KEY) || '[]');
    updateMessagesBadge(messages.length);

    // Empty inbox state
    if (messages.length === 0) {
      messagesContainer.innerHTML = `
        <div style="
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(15,23,42,0.3);
          border: 1px dashed var(--border-color);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        ">
          <div style="
            width: 70px; height: 70px;
            border-radius: 50%;
            background: rgba(56,189,248,0.07);
            border: 1px solid rgba(56,189,248,0.15);
            display: flex; align-items: center; justify-content: center;
            font-size: 1.8rem; color: var(--primary);
          ">
            <i class="fa-solid fa-inbox"></i>
          </div>
          <h3 style="color: var(--text-main); font-size: 1.15rem;">Inbox is Empty</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 380px;">
            No contact form submissions received yet. When visitors fill out the contact form on your portfolio, their messages will appear here as a secure local backup.
          </p>
        </div>
      `;
      return;
    }

    // Render message cards
    messagesContainer.innerHTML = messages.map((msg, index) => `
      <div class="msg-card" data-index="${index}" style="
        background: rgba(15,23,42,0.45);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
        position: relative;
        overflow: hidden;
      ">
        <!-- Top accent glow line -->
        <div style="
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gradient-main);
          border-radius: 16px 16px 0 0;
          opacity: 0.6;
        "></div>

        <!-- Card Header: Name + Date + Delete -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="
              width: 42px; height: 42px; border-radius: 50%;
              background: var(--gradient-main);
              display: flex; align-items: center; justify-content: center;
              font-size: 1.1rem; color: var(--bg-main);
              font-weight: 700; flex-shrink: 0;
              font-family: var(--font-heading);
            ">${(msg.name || '?').charAt(0).toUpperCase()}</div>
            <div>
              <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-main);">${msg.name || 'Unknown Sender'}</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">${msg.date || 'No date'}</div>
            </div>
          </div>
          <button class="btn-delete-msg editor-btn btn-danger" data-index="${index}" title="Delete this message" style="
            flex-shrink: 0; padding: 0.4rem 0.85rem; font-size: 0.8rem; border-radius: 8px; cursor: pointer;
          ">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </div>

        <!-- Contact Meta Row -->
        <div style="
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 0.6rem;
        ">
          <a href="mailto:${msg.email || ''}" style="
            display: flex; align-items: center; gap: 0.5rem;
            background: rgba(56,189,248,0.05);
            border: 1px solid rgba(56,189,248,0.12);
            border-radius: 8px; padding: 0.5rem 0.85rem;
            color: var(--primary); font-size: 0.85rem;
            text-decoration: none; transition: background 0.2s ease;
          ">
            <i class="fa-solid fa-envelope" style="flex-shrink:0; opacity:0.8;"></i>
            <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${msg.email || 'No email'}</span>
          </a>
          ${msg.phone ? `
          <a href="tel:${msg.phone}" style="
            display: flex; align-items: center; gap: 0.5rem;
            background: rgba(56,189,248,0.05);
            border: 1px solid rgba(56,189,248,0.12);
            border-radius: 8px; padding: 0.5rem 0.85rem;
            color: var(--primary); font-size: 0.85rem;
            text-decoration: none; transition: background 0.2s ease;
          ">
            <i class="fa-solid fa-phone" style="flex-shrink:0; opacity:0.8;"></i>
            <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${msg.phone}</span>
          </a>` : ''}
          ${msg.address ? `
          <div style="
            display: flex; align-items: center; gap: 0.5rem;
            background: rgba(56,189,248,0.05);
            border: 1px solid rgba(56,189,248,0.12);
            border-radius: 8px; padding: 0.5rem 0.85rem;
            color: var(--text-muted); font-size: 0.85rem;
          ">
            <i class="fa-solid fa-location-dot" style="flex-shrink:0; color: var(--primary); opacity:0.8;"></i>
            <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${msg.address}</span>
          </div>` : ''}
        </div>

        <!-- Message Body -->
        ${msg.message ? `
        <div style="
          background: rgba(2,6,23,0.35);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 1rem 1.25rem;
        ">
          <div style="
            font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em;
            color: var(--primary); text-transform: uppercase; margin-bottom: 0.6rem;
          "><i class="fa-solid fa-comment-dots" style="margin-right: 0.35rem;"></i> Message</div>
          <p style="color: var(--text-main); font-size: 0.9rem; line-height: 1.7; margin: 0; white-space: pre-wrap;">${msg.message}</p>
        </div>` : ''}
      </div>
    `).join('');

    // Bind single delete buttons
    messagesContainer.querySelectorAll('.btn-delete-msg').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        const msgs = JSON.parse(localStorage.getItem(MESSAGES_KEY) || '[]');
        msgs.splice(index, 1);
        localStorage.setItem(MESSAGES_KEY, JSON.stringify(msgs));
        renderMessagesList();
        showToast('Message deleted.');
      });
    });
  }

  // Clear All Messages button
  if (btnClearAllMessages) {
    btnClearAllMessages.addEventListener('click', () => {
      const msgs = JSON.parse(localStorage.getItem(MESSAGES_KEY) || '[]');
      if (msgs.length === 0) {
        showToast('No messages to clear.', true);
        return;
      }
      if (confirm(`Are you sure you want to permanently delete all ${msgs.length} contact message(s)? This cannot be undone.`)) {
        localStorage.removeItem(MESSAGES_KEY);
        renderMessagesList();
        showToast('All messages cleared.');
      }
    });
  }

  // Load it all on boot
  loadFormData();
  // Initialise badge counter on page load
  const _initMsgs = JSON.parse(localStorage.getItem(MESSAGES_KEY) || '[]');
  updateMessagesBadge(_initMsgs.length);
});
