/**
 * Neev Welfare Foundation - Core Interactive Application Logic
 * Modern, clean, modular Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. Global State & Data Models ---
  const focusAreaData = {
    children: {
      title: 'Child Welfare & Education',
      badge: 'CHILDREN',
      image: './images/v26_1754.png',
      causeOption: 'Child Welfare & Education',
      description: 'Every child deserves foundational care, safe classrooms, and holistic development. In rural Bundelkhand and Uttar Pradesh, we support over 4,200 children with school kits, remedial coaching, and regular pediatric health checkups.',
      highlights: [
        'Deployment of digital learning kits & classroom supplies',
        'Remedial after-school tutoring for slow-paced learners',
        'Quarterly pediatric nutrition monitoring & health camps',
        'Child protection & anti-child-labor grassroots drives'
      ],
      impactMetric: '4,200+ Children Supported'
    },
    youth: {
      title: 'Youth Development & Skills',
      badge: 'YOUTH',
      image: './images/v26_1771.png',
      causeOption: 'Youth Development & Skills',
      description: 'Bridging the critical gap between raw talent and economic self-sufficiency. We provide technical certifications, interview prep, career mentorship, and micro-entrepreneurship incubation for rural youth.',
      highlights: [
        'Short-term technical certifications aligned to regional industries',
        'One-on-one career counseling and mentorship network',
        'Apprenticeship placements with verified manufacturing and IT partners',
        'Rural micro-enterprise guidance and seed funding linkages'
      ],
      impactMetric: '1,800+ Youth Trained & Certified'
    },
    women: {
      title: 'Women Empowerment & Self-Help Collectives',
      badge: 'WOMEN',
      image: './images/v26_1788.png',
      causeOption: 'Women Empowerment',
      description: 'Fostering financial self-reliance and collective leadership among rural women. We incubate Self-Help Groups (SHGs), deliver tailoring and artisanal skill workshops, and provide direct market linkages.',
      highlights: [
        'Forming and sustaining 120+ active Self-Help Groups (SHGs)',
        'Vocational training in advanced tailoring, handicraft, and food processing',
        'Financial literacy and zero-collateral micro-credit facilitation',
        'Legal rights, maternal wellness, and gender parity community workshops'
      ],
      impactMetric: '3,500+ Women Economically Empowered'
    },
    digital: {
      title: 'Education & Digital Literacy',
      badge: 'DIGITAL',
      image: './images/v26_1805.png',
      causeOption: 'Education & Digital Literacy',
      description: 'Democratizing modern digital opportunities for underprivileged rural students. We build modern solar-powered computer labs and provide foundational digital courses to prepare youth for the 21st-century economy.',
      highlights: [
        'High-speed computer labs established in rural schools',
        'Digital curriculum covering basic computing, coding, and internet safety',
        'Merit scholarships for underprivileged rural students',
        'Digital teacher capacity training modules'
      ],
      impactMetric: '25+ Digital Classrooms Established'
    },
    health: {
      title: 'Healthcare & Preventive Wellness',
      badge: 'HEALTH',
      image: './images/v26_1822.png',
      causeOption: 'Healthcare & Well-Being',
      description: 'Bringing primary medical checkups, maternal care, and preventive health screenings straight to rural doorsteps where hospital access is severely constrained.',
      highlights: [
        'Free doorstep multi-specialty mobile health camps',
        'Maternal & child malnutrition intervention programs',
        'Menstrual hygiene education & free biodegradable sanitary pad distribution',
        'Preventive diagnostic screenings for diabetes, anemia, and hypertension'
      ],
      impactMetric: '15,000+ Screenings Conducted'
    },
    community: {
      title: 'Community & Rural Infrastructure',
      badge: 'COMMUNITY',
      image: './images/v26_1839.png',
      causeOption: 'General Support',
      description: 'Strengthening grassroots governance, local civic capacity, and community infrastructure to ensure self-sustained rural transformation.',
      highlights: [
        'Facilitating gram sabha citizen participation workshops',
        'Connecting underserved households to official government welfare schemes',
        'Community drinking water points & solar street lamp installations',
        'Youth leadership councils for village dispute resolution and public development'
      ],
      impactMetric: '40+ Village Ecosystems Transformed'
    },
    environment: {
      title: 'Environment & Climate Resilience',
      badge: 'ENVIRONMENT',
      image: './images/v26_1856.png',
      causeOption: 'Environment & Ecology',
      description: 'Restoring native biodiversity and ground water reserves in Bundelkhand’s drought-prone landscape through mass community afforestation and rainwater harvesting.',
      highlights: [
        'Mass plantation drives with 10,000+ indigenous trees planted',
        'Check-dam restoration and rooftop rainwater harvesting units',
        'Zero-waste village campaigns and plastic recycling incentives',
        'Solar lighting and clean renewable energy awareness drives'
      ],
      impactMetric: '10,000+ Native Saplings Thriving'
    },
    innovation: {
      title: 'Frontier Technology & Innovation',
      badge: 'INNOVATION',
      image: './images/v26_1873.png',
      causeOption: 'Technology & Innovation',
      description: 'Inspiring rural youth to explore emerging technologies including drone mechanics, artificial intelligence, robotics, and clean electric mobility fundamentals.',
      highlights: [
        'Hands-on robotics and electronics demonstration labs',
        'Drone piloting and agricultural aerial mapping workshops',
        'Introduction to AI and digital problem-solving',
        'EV mechanic apprenticeship prep camps'
      ],
      impactMetric: '800+ Students Engaged in Tech Camps'
    }
  };

  const newsArticlesData = {
    1: {
      title: 'Equipping 500+ Rural Students With Foundational STEM Kits',
      date: 'October 2025',
      category: 'Education',
      image: './images/v26_2841.png',
      content: `Our digital education wing successfully deployed tablet-assisted learning modules and hands-on scientific experiment kits across 6 primary schools in the Garautha block of Jhansi district.\n\nOver 500 rural students experienced interactive science experiments, foundational mathematics games, and computer basics for the first time. The initiative is paired with intensive teacher training sessions to ensure continuous and enthusiastic learning throughout the academic calendar.`
    },
    2: {
      title: "Garautha Women's Collective Inaugurates Tailoring Hub",
      date: 'September 2025',
      category: 'Livelihoods',
      image: './images/v26_2860.png',
      content: `Forty-five women graduated from our advanced vocational tailoring and textile design course, celebrating the official inauguration of the Garautha Women's Self-Reliant Apparel Hub.\n\nEquipped with 20 industrial sewing machines, the center has already secured bulk supply orders for school uniforms and eco-friendly cotton tote bags, ensuring steady independent income for all participating households.`
    },
    3: {
      title: 'Planting 5,000 Native Saplings Across Jhansi Rural Belt',
      date: 'August 2025',
      category: 'Environment',
      image: './images/v26_2879.png',
      content: `Local youth councils, school children, and village elders joined hands with our ecological cell to plant 5,000 indigenous trees (Neem, Peepal, Banyan, and Jamun) across village commons and catchment borders.\n\nEvery sapling has been assigned to a local youth guardian to ensure watering and fencing protection, achieving an average survival rate exceeding 88% in past cohorts.`
    }
  };

  // --- 2. Toast Notification System ---
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;
    
    const iconSvg = type === 'error'
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

    toast.innerHTML = `
      ${iconSvg}
      <span>${message}</span>
    `;

    container.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // --- 3. Sticky Header & Mobile Drawer Navigation ---
  const siteHeader = document.getElementById('site-header');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');

  // Scroll header styling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // Open Drawer
  function openMobileDrawer(e) {
    if (e && e.type === 'touchstart') e.preventDefault();
    if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
    if (mobileDrawer) {
      mobileDrawer.classList.add('active');
      mobileDrawer.setAttribute('aria-hidden', 'false');
    }
    if (mobileOverlay) {
      mobileOverlay.classList.add('active');
      mobileOverlay.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
  }

  // Close Drawer
  function closeMobileDrawer(e) {
    if (e && e.type === 'touchstart') e.preventDefault();
    if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
    if (mobileDrawer) {
      mobileDrawer.classList.remove('active');
      mobileDrawer.setAttribute('aria-hidden', 'true');
    }
    if (mobileOverlay) {
      mobileOverlay.classList.remove('active');
      mobileOverlay.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileDrawer);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDrawer && mobileDrawer.classList.contains('active')) closeMobileDrawer();
      closeAllModals();
    }
  });

  // Smooth scroll and auto-close mobile drawer on link click
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
    });
  });

  const drawerDonateBtn = document.querySelector('.mobile-drawer-donate');
  if (drawerDonateBtn) {
    drawerDonateBtn.addEventListener('click', () => {
      closeMobileDrawer();
    });
  }

  // --- 4. Active Section Highlighting via Intersection Observer ---
  const trackedSections = [
    document.getElementById('hero'),
    document.getElementById('about-mission'),
    document.getElementById('about'),
    document.getElementById('interventions'),
    document.getElementById('impact'),
    document.getElementById('get-involved'),
    document.getElementById('donate-section'),
    document.getElementById('news'),
    document.getElementById('contact')
  ].filter(Boolean);

  const navObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        updateActiveNav(id);
      }
    });
  }, navObserverOptions);

  trackedSections.forEach(section => navObserver.observe(section));

  function updateActiveNav(activeId) {
    const targetHref = `#${activeId}`;
    
    // Map internal section ids to corresponding nav links
    let matchingHref = targetHref;
    if (activeId === 'about-mission') matchingHref = '#about';

    desktopNavLinks.forEach(link => {
      if (link.getAttribute('href') === matchingHref) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileNavLinks.forEach(link => {
      if (link.getAttribute('href') === matchingHref) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // --- 5. Scroll Animations (Fade-in-up) ---
  const animatedElements = document.querySelectorAll('.fade-in-up, .pillar-card, .intervention-card, .movement-card, .approach-step-card, .news-card, .director-card');

  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    el.classList.add('fade-in-up');
    animationObserver.observe(el);
  });

  // --- 6. Impact Counters Animation ---
  const impactSection = document.getElementById('impact');
  let countersAnimated = false;

  function runImpactCounters() {
    const counterElements = document.querySelectorAll('.impact-number');
    counterElements.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const suffix = counter.getAttribute('data-suffix') || '';
      const divisor = parseFloat(counter.getAttribute('data-divisor')) || 1;
      
      let start = 0;
      const duration = 1800; // ms
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = start + (target - start) * easeOut;
        
        const displayVal = divisor > 1 
          ? (currentVal / divisor).toFixed(divisor === 1000 && target < 10000 ? 1 : 0) 
          : Math.floor(currentVal);

        counter.textContent = `${displayVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          // Final exact formatted string
          const finalVal = divisor > 1 ? (target / divisor) : target;
          counter.textContent = `${finalVal}${suffix}`;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  if (impactSection) {
    const impactObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !countersAnimated) {
        countersAnimated = true;
        runImpactCounters();
      }
    }, { threshold: 0.25 });

    impactObserver.observe(impactSection);
  }

  // --- 7. Interactive Donation System ---
  const donationForm = document.getElementById('donation-form');
  const freqButtons = document.querySelectorAll('.freq-btn');
  const presetButtons = document.querySelectorAll('.preset-btn');
  const customAmountInput = document.getElementById('custom-amount');
  const causeSelect = document.getElementById('cause-select');
  const donorNameInput = document.getElementById('donor-name');
  const donorEmailInput = document.getElementById('donor-email');
  const donorPanInput = document.getElementById('donor-pan');

  let currentFrequency = 'One-Time';
  let currentAmount = 1000;

  // Toggle Frequency
  freqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      freqButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');
      currentFrequency = btn.getAttribute('data-freq') === 'monthly' ? 'Monthly' : 'One-Time';
    });
  });

  // Preset Buttons
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      presetButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAmount = parseInt(btn.getAttribute('data-amount'), 10);
      if (customAmountInput) customAmountInput.value = '';
    });
  });

  // Custom Amount Input
  if (customAmountInput) {
    customAmountInput.addEventListener('input', () => {
      const val = parseInt(customAmountInput.value, 10);
      if (!isNaN(val) && val > 0) {
        presetButtons.forEach(b => b.classList.remove('active'));
        currentAmount = val;
      }
    });
  }

  // Form Validation & Donation Confirmation Modal Trigger
  if (donationForm) {
    donationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const nameVal = donorNameInput.value.trim();
      const emailVal = donorEmailInput.value.trim();
      const panVal = donorPanInput.value.trim();

      // Clear previous error states
      [donorNameInput, donorEmailInput, donorPanInput].forEach(inp => inp.classList.remove('error'));
      document.getElementById('name-error').textContent = '';
      document.getElementById('email-error').textContent = '';
      document.getElementById('pan-error').textContent = '';

      // Validate Name
      if (nameVal.length < 2) {
        donorNameInput.classList.add('error');
        document.getElementById('name-error').textContent = 'Please enter your full name.';
        isValid = false;
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailVal)) {
        donorEmailInput.classList.add('error');
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      // Optional PAN Validation
      if (panVal.length > 0) {
        const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i;
        if (!panPattern.test(panVal)) {
          donorPanInput.classList.add('error');
          document.getElementById('pan-error').textContent = 'Valid PAN required (e.g., ABCDE1234F) for 80G.';
          isValid = false;
        }
      }

      if (!isValid) {
        showToast('Please fix the errors in the donation form.', 'error');
        return;
      }

      // Open Donation Summary Modal
      openDonationModal({
        amount: currentAmount,
        frequency: currentFrequency,
        cause: causeSelect.value,
        name: nameVal,
        email: emailVal,
        pan: panVal || 'Not Specified (General Tax Benefit)'
      });
    });
  }

  // Donation Modal Logic
  const donationModal = document.getElementById('donation-modal');
  const donateModalClose = document.getElementById('donate-modal-close');
  const confirmDonationBtn = document.getElementById('confirm-donation-btn');
  const donationSummaryContent = document.getElementById('donation-summary-content');

  function openDonationModal(data) {
    if (!donationModal || !donationSummaryContent) return;

    donationSummaryContent.innerHTML = `
      <div class="donation-summary-row">
        <span>Contribution Amount:</span>
        <strong>₹${data.amount.toLocaleString('en-IN')}</strong>
      </div>
      <div class="donation-summary-row">
        <span>Frequency:</span>
        <strong>${data.frequency}</strong>
      </div>
      <div class="donation-summary-row">
        <span>Allocation:</span>
        <span>${data.cause}</span>
      </div>
      <div class="donation-summary-row">
        <span>Donor Name:</span>
        <span>${data.name}</span>
      </div>
      <div class="donation-summary-row">
        <span>Email Address:</span>
        <span>${data.email}</span>
      </div>
      <div class="donation-summary-row">
        <span>PAN Reference:</span>
        <span>${data.pan}</span>
      </div>
      <div class="donation-summary-row">
        <span>Total Payable:</span>
        <strong>₹${data.amount.toLocaleString('en-IN')}</strong>
      </div>
    `;

    donationModal.classList.add('active');
    donationModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  if (donateModalClose) {
    donateModalClose.addEventListener('click', () => {
      donationModal.classList.remove('active');
      donationModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  if (confirmDonationBtn) {
    confirmDonationBtn.addEventListener('click', () => {
      confirmDonationBtn.disabled = true;
      confirmDonationBtn.innerHTML = `<span>Processing Contribution...</span>`;

      setTimeout(() => {
        donationModal.classList.remove('active');
        donationModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        confirmDonationBtn.disabled = false;
        confirmDonationBtn.innerHTML = `<span>COMPLETE CONTRIBUTION</span>`;

        showToast(`Thank you! Your donation of ₹${currentAmount.toLocaleString('en-IN')} was successful. Official 80G receipt emailed!`);
        donationForm.reset();
        presetButtons[1].click(); // Reset to ₹1,000 preset
      }, 1200);
    });
  }

  // Showcase section buttons that direct to donation with prefilled cause
  const causeButtons = document.querySelectorAll('[data-cause]');
  causeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cause = btn.getAttribute('data-cause');
      if (causeSelect) {
        for (let i = 0; i < causeSelect.options.length; i++) {
          if (causeSelect.options[i].value === cause) {
            causeSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

  // --- 8. Focus Area Modal Logic ---
  const focusModal = document.getElementById('focus-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContentBody = document.getElementById('modal-content-body');
  const cardActionButtons = document.querySelectorAll('.card-action-btn');

  cardActionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.intervention-card');
      const cat = card.getAttribute('data-category');
      const data = focusAreaData[cat];

      if (data && modalContentBody) {
        modalContentBody.innerHTML = `
          <div class="modal-focus-header">
            <span class="eyebrow-tag">${data.badge}</span>
            <h3 class="modal-title">${data.title}</h3>
            <span class="cert-badge text-green font-bold mt-8">${data.impactMetric}</span>
          </div>
          <div class="modal-media-frame mt-16" style="border-radius: 12px; overflow: hidden; max-height: 220px;">
            <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 220px; object-fit: cover;">
          </div>
          <p class="modal-focus-desc mt-16" style="font-size: 0.9375rem; color: var(--gray-600); line-height: 1.6;">
            ${data.description}
          </p>
          <div class="modal-highlights-block mt-20">
            <h4 style="font-size: 0.875rem; font-weight: 700; color: var(--navy-900); margin-bottom: 10px;">Key Interventions & Scope:</h4>
            <ul style="display: flex; flex-direction: column; gap: 8px;">
              ${data.highlights.map(item => `
                <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.8125rem; color: var(--gray-700);">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00873E" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="modal-actions-row mt-24" style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="#donate-section" class="btn btn-primary btn-block modal-donate-link" data-cause="${data.causeOption}">
              SUPPORT THIS INITIATIVE
            </a>
          </div>
        `;

        focusModal.classList.add('active');
        focusModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Connect the newly injected button
        const modalDonateLink = modalContentBody.querySelector('.modal-donate-link');
        if (modalDonateLink) {
          modalDonateLink.addEventListener('click', () => {
            focusModal.classList.remove('active');
            focusModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            if (causeSelect) causeSelect.value = data.causeOption;
          });
        }
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      focusModal.classList.remove('active');
      focusModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  // --- 9. News Filter Tabs & Article View ---
  const filterPills = document.querySelectorAll('.filter-pill');
  const newsCards = document.querySelectorAll('.news-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');

      newsCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // News Read Full Story Buttons
  const readMoreButtons = document.querySelectorAll('.news-read-more');
  readMoreButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const articleId = btn.getAttribute('data-article');
      const article = newsArticlesData[articleId];

      if (article && modalContentBody) {
        modalContentBody.innerHTML = `
          <div class="modal-news-header">
            <span class="news-badge" style="position: static; display: inline-block; margin-bottom: 8px;">${article.category}</span>
            <span style="font-size: 0.75rem; color: var(--gray-500); display: block; margin-bottom: 4px;">${article.date}</span>
            <h3 class="modal-title">${article.title}</h3>
          </div>
          <div class="modal-media-frame mt-16" style="border-radius: 12px; overflow: hidden; max-height: 220px;">
            <img src="${article.image}" alt="${article.title}" style="width: 100%; height: 220px; object-fit: cover;">
          </div>
          <div class="modal-article-body mt-16" style="font-size: 0.9375rem; color: var(--gray-700); line-height: 1.7; white-space: pre-line;">
            ${article.content}
          </div>
        `;

        focusModal.classList.add('active');
        focusModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // --- 10. Community Event Quick RSVP ---
  const eventActionButtons = document.querySelectorAll('.btn-event-action');
  const volInterestSelect = document.getElementById('vol-interest');

  eventActionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const eventName = btn.getAttribute('data-event');
      
      // Auto-populate volunteer interest
      if (volInterestSelect) {
        if (eventName.includes('Health')) {
          volInterestSelect.value = 'Medical Camps / Healthcare';
        } else if (eventName.includes('Tech') || eventName.includes('Career')) {
          volInterestSelect.value = 'Tech Literacy & Computer Training';
        } else if (eventName.includes('Tree') || eventName.includes('Afforestation')) {
          volInterestSelect.value = 'Tree Plantation & Clean Water';
        }
      }

      // Scroll smoothly to volunteer form
      const volSection = document.getElementById('volunteer');
      if (volSection) {
        volSection.scrollIntoView({ behavior: 'smooth' });
        showToast(`Selected event: "${eventName}". Please submit your volunteer details below!`);
      }
    });
  });

  // --- 11. Volunteer Form Submission ---
  const volunteerForm = document.getElementById('volunteer-form');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('vol-name').value.trim();
      const email = document.getElementById('vol-email').value.trim();
      const phone = document.getElementById('vol-phone').value.trim();
      const city = document.getElementById('vol-city').value.trim();

      let hasError = false;

      if (!name) {
        document.getElementById('vol-name-error').textContent = 'Full name is required.';
        hasError = true;
      } else {
        document.getElementById('vol-name-error').textContent = '';
      }

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('vol-email-error').textContent = 'Valid email is required.';
        hasError = true;
      } else {
        document.getElementById('vol-email-error').textContent = '';
      }

      if (!phone || phone.length < 8) {
        document.getElementById('vol-phone-error').textContent = 'Valid contact number is required.';
        hasError = true;
      } else {
        document.getElementById('vol-phone-error').textContent = '';
      }

      if (!city) {
        document.getElementById('vol-city-error').textContent = 'City/Location is required.';
        hasError = true;
      } else {
        document.getElementById('vol-city-error').textContent = '';
      }

      if (hasError) return;

      const submitBtn = volunteerForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Registration...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'BECOME A VOLUNTEER';
        volunteerForm.reset();
        showToast(`Welcome aboard, ${name}! Your volunteer registration was received. We will contact you shortly.`);
      }, 1000);
    });
  }

  // --- 12. CSR Deck Request Modal ---
  const btnRequestCsr = document.getElementById('btn-request-csr');
  const csrModal = document.getElementById('csr-modal');
  const csrModalClose = document.getElementById('csr-modal-close');
  const csrDeckForm = document.getElementById('csr-deck-form');

  if (btnRequestCsr && csrModal) {
    btnRequestCsr.addEventListener('click', () => {
      csrModal.classList.add('active');
      csrModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  }

  if (csrModalClose) {
    csrModalClose.addEventListener('click', () => {
      csrModal.classList.remove('active');
      csrModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  if (csrDeckForm) {
    csrDeckForm.addEventListener('submit', (e) => {
      e.preventDefault();
      csrModal.classList.remove('active');
      csrModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      showToast('CSR Partnership Deck & Audited Reports sent to your email!');
      csrDeckForm.reset();
    });
  }

  // --- 13. Contact Direct Message Form ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      let valid = true;
      if (!name) {
        document.getElementById('contact-name-error').textContent = 'Name is required.';
        valid = false;
      } else {
        document.getElementById('contact-name-error').textContent = '';
      }

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('contact-email-error').textContent = 'Valid email is required.';
        valid = false;
      } else {
        document.getElementById('contact-email-error').textContent = '';
      }

      if (!subject) {
        document.getElementById('contact-subject-error').textContent = 'Subject is required.';
        valid = false;
      } else {
        document.getElementById('contact-subject-error').textContent = '';
      }

      if (!message) {
        document.getElementById('contact-msg-error').textContent = 'Message is required.';
        valid = false;
      } else {
        document.getElementById('contact-msg-error').textContent = '';
      }

      if (!valid) return;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending Message...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'SEND MESSAGE';
        contactForm.reset();
        showToast('Thank you! Your message has been dispatched to our Jhansi office.');
      }, 1000);
    });
  }

  // --- 14. Floating Back to Top Button with Scroll Progress Ring ---
  const backToTopBtn = document.getElementById('back-to-top');
  const progressCircle = document.querySelector('.progress-ring-circle');
  const circumference = 113.1; // 2 * PI * 18

  if (progressCircle) {
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

    if (scrollTop > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    if (progressCircle) {
      const offset = circumference - scrollPercent * circumference;
      progressCircle.style.strokeDashoffset = offset;
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 15. Helper: Close all modals ---
  function closeAllModals() {
    [focusModal, donationModal, csrModal].forEach(modal => {
      if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
    document.body.style.overflow = '';
  }

  // Close modals when clicking outside card
  [focusModal, donationModal, csrModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeAllModals();
        }
      });
    }
  });

  // Footer placeholder legal links toast
  ['link-privacy', 'link-terms', 'link-audits'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        showToast(`${el.textContent} document is available at our registered office and in the compliance records.`);
      });
    }
  });

  // --- 16. Page Load Progress Bar Animation ---
  const pageLoader = document.getElementById('page-loader');
  if (pageLoader) {
    pageLoader.style.width = '70%';
    window.addEventListener('load', () => {
      pageLoader.style.width = '100%';
      setTimeout(() => {
        pageLoader.classList.add('done');
      }, 350);
    });
  }

  // --- 17. Interactive Key Interventions Filter Chips ---
  const filterChips = document.querySelectorAll('.filter-chip');
  const interventionCards = document.querySelectorAll('.intervention-card');

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filterVal = chip.getAttribute('data-filter');
      const targetCategories = filterVal === 'all' ? null : filterVal.split(',').map(s => s.trim());

      interventionCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (!targetCategories || targetCategories.includes(cardCat)) {
          card.classList.remove('card-hidden');
        } else {
          card.classList.add('card-hidden');
        }
      });
    });
  });

  // --- 18. Interactive Full Card Click Triggers ---
  // Allow clicking anywhere on an intervention card to open its detail modal
  interventionCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('button')) {
        const btn = card.querySelector('.card-action-btn');
        if (btn) btn.click();
      }
    });
  });

  // Health initiative cards interactive click
  const healthCards = document.querySelectorAll('.health-card');
  healthCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.health-card-title')?.textContent || 'Health Initiative';
      const metric = card.querySelector('.health-metric-num')?.textContent || '';
      showToast(`Healthcare Milestone: ${title} (${metric} screened across Bundelkhand)`);
    });
  });

  // Mission pillar cards interactive click
  const pillarCards = document.querySelectorAll('.pillar-card');
  pillarCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.pillar-title')?.textContent || 'Mission Pillar';
      showToast(`Core Pillar: ${title} - Creating grassroots sustainable empowerment.`);
    });
  });

});

