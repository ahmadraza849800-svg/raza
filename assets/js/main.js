/**
 * DAR UL ULOOM RIZVIA MASOOMIA — MAIN JAVASCRIPT
 * Islamic Educational Institution Exclusively for Women
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initCourseFilters();
  initCourseModal();
  initFaqAccordion();
  initAdmissionForm();
  initContactForm();
  initSmoothScroll();
});

/* ----------------------------------------------------
   1. MOBILE NAVIGATION
------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('mobileMenuClose');
  const mobileMenu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ----------------------------------------------------
   2. COURSE FILTERING SYSTEM
------------------------------------------------------- */
function initCourseFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab');
  const courseCards = document.querySelectorAll('.course-item');

  if (!filterBtns.length || !courseCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      courseCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease';
            card.style.opacity = '1';
          }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ----------------------------------------------------
   3. COURSE SYLLABUS DATA & MODAL
------------------------------------------------------- */
const courseData = {
  'dars-e-nizami': {
    title: '6-Year Dars-e-Nizami (Alimah / Fazilah Program)',
    arabicTitle: 'درس نظامی برائے خواتین (۶ سالہ مکمل درس نظامی کورس)',
    badge: 'Flagship Curriculum • Women Only',
    duration: '6 Years Comprehensive Program',
    eligibility: 'Matric / Middle (or equivalent basic literacy with entrance assessment)',
    medium: 'Urdu & Arabic with English support',
    overview: 'Our flagship Islamic scholarship program exclusively for female students, grounded in classical traditions of Ahl-us-Sunnah wal-Jama\'ah. This curriculum transforms students into certified Alimat and research scholars proficient in Quranic sciences, Hadith exegesis, Hanafi Jurisprudence, Arabic syntax, and spiritual purification.',
    curriculumStages: [
      { year: 'Year 1 (Al-Oula)', topics: 'Mizan-us-Sarf, Munsha\'ib, Nahw Mir, Duroos-ul-Lughat-il-Arabiyyah, Tajweed-ul-Quran, Sirat-un-Nabi ﷺ, Basic Fiqh (Ta’leem-ul-Islam).' },
      { year: 'Year 2 (As-Sania)', topics: 'Ilm-us-Seegha, Hidayat-un-Nahw, Al-Qira\'at-ul-Wadiha, Nur-ul-Idah, Qudoori (Ibadat), Usool-ush-Shashi (Principles of Jurisprudence).' },
      { year: 'Year 3 (As-Salisa)', topics: 'Kafiyah (Advanced Nahw), Mukhtasar-ul-Qudoori (Mu\'amalat), Riaz-us-Saliheen, Mantiq (Isaghuji & Mirqat), Arabic Composition.' },
      { year: 'Year 4 (Ar-Rabia)', topics: 'Sharh Wiqayah, Usool-ush-Shashi (Advanced), Talkhees-ul-Miftah (Balaghat & Rhetoric), Mishkat-ul-Masabih (Vol 1), Aqeeda Tahawiyya.' },
      { year: 'Year 5 (Al-Khamisa)', topics: 'Hidayah (Awwalain), Tafseer-ul-Jalalayn, Mishkat-ul-Masabih (Vol 2), Comparative Fiqh, Islamic History & Contemporary Ethics.' },
      { year: 'Year 6 (Daura-e-Hadith)', topics: 'Comprehensive study of Kutub-us-Sittah: Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami\' al-Tirmidhi, Sunan an-Nasa\'i, Sunan Ibn Majah, and Muwatta Imam Malik.' }
    ],
    features: [
      'Exclusively female teachers & scholars for practical coaching',
      'Daily Tarbiyah, Khatm-e-Quran, and spiritual mentorship',
      'Special focus on Contemporary Women\'s Jurisprudential Inquiries (Fatawa Niswan)',
      'Certified Alimah Sanad awarded upon completion of Daura-e-Hadith'
    ]
  },
  'middle': {
    title: 'Middle Section (Grades 6 to 8)',
    arabicTitle: 'مڈل سیکشن (ششم تا ہشتم)',
    badge: 'Dual Curriculum • Foundation Stage',
    duration: '3 Academic Years (Class 6, 7 & 8)',
    eligibility: 'Passed Primary School / 5th Class or equivalent Nazra test',
    medium: 'English & Urdu Medium tracks',
    overview: 'Nurturing young girls with a wholesome dual education. Students complete the standard school curriculum (English, Mathematics, Science, Computer Studies, Social Studies, Urdu) while simultaneously building a solid Islamic foundation with daily Quranic Nazra with Tajweed, Masnoon Duas, and Islamic Morals.',
    curriculumStages: [
      { year: 'Academic Subjects', topics: 'Mathematics, General Science, English Grammar & Composition, Urdu Literature, Computer Applications, Pakistan Studies, Islamiyat.' },
      { year: 'Islamic Foundation', topics: 'Nazra Quran with rules of Tajweed, Memorization of Surahs (Amma Para), 40 Masnoon Duas, Basic Sunnah Ettiquettes, Seerat stories.' },
      { year: 'Skill & Moral Tarbiyah', topics: 'Calligraphy, Home Sciences basics, Public Speaking in assemblies, Hygiene & Islamic modesty awareness.' }
    ],
    features: [
      'Safe, affectionate, all-women school environment',
      'Continuous character building (Adab & Akhlaq)',
      'Regular parent-teacher coordination and physical development in a private courtyard'
    ]
  },
  'matric': {
    title: 'Matriculation (Grades 9 & 10)',
    arabicTitle: 'میٹرک (سائنس و آرٹس)',
    badge: 'BISE Affiliated / Board Preparation',
    duration: '2 Academic Years (Class 9 & 10)',
    eligibility: 'Passed 8th Grade Middle School from any recognized school or board',
    medium: 'English & Urdu Medium',
    overview: 'Preparing young women for Board of Intermediate and Secondary Education (BISE) examinations with top academic standing. We offer both Science and Humanities (Arts) streams alongside daily Quranic reflection, Hadith memorization, and moral coaching in an uncompromised Purdah atmosphere.',
    curriculumStages: [
      { year: 'Science Group', topics: 'Biology / Computer Science, Chemistry, Physics, Mathematics, English, Urdu, Islamiyat, Tarjuma-tul-Quran.' },
      { year: 'Arts / Humanities Group', topics: 'Islamic Studies, General Science, General Mathematics, Civics / Education, Arabic Literature, English, Urdu, Tarjuma-tul-Quran.' },
      { year: 'Spiritual Integration', topics: 'Understanding Tarjuma-tul-Quran curriculum, Seerah studies, and personal modesty workshops.' }
    ],
    features: [
      'Comprehensive board exam revision, test sessions, and past paper drills',
      'Well-equipped Science & Computer labs strictly supervised by female instructors',
      'Focus on high percentage scoring for college merit admissions'
    ]
  },
  'fa': {
    title: 'F.A. (Faculty of Arts / Humanities)',
    arabicTitle: 'ایف اے (انٹرمیڈیٹ ان آرٹس)',
    badge: 'Higher Secondary • 2 Years',
    duration: '2 Academic Years (11th & 12th Grade)',
    eligibility: 'Passed Matriculation (Science or Arts) with minimum 2nd division',
    medium: 'Urdu & English Medium options',
    overview: 'An intermediate program designed for young women aiming for higher academic degrees or balancing classical Islamic education with standard board credentials. Special focus on Arabic, Islamic Studies, Education, and Civics.',
    curriculumStages: [
      { year: 'Compulsory Subjects', topics: 'English (Compulsory), Urdu (Compulsory), Islamic Education / Pakistan Studies, Tarjuma-tul-Quran-ul-Majeed.' },
      { year: 'Elective Combinations', topics: 'Islamic Studies (Elective), Arabic Language & Literature, Education, Civics, Sociology, Home Economics.' },
      { year: 'Concurrent Dars-e-Nizami Option', topics: 'Students may also opt for dual-enrollment in the foundational years of the Dars-e-Nizami program.' }
    ],
    features: [
      'Experienced female college lecturers',
      'Debates, essay writing competitions, and research writing skills',
      'Direct pathway into B.S. Islamic Studies or universities'
    ]
  },
  'bs-islamic-studies': {
    title: 'B.S. Islamic Studies (4-Year Degree)',
    arabicTitle: 'بی ایس علومِ اسلامیہ (۴ سالہ ڈگری پروگرام)',
    badge: 'Undergraduate Higher Education',
    duration: '4 Academic Years (8 Semesters)',
    eligibility: 'Intermediate (F.A. / F.Sc / I.Com / ICS) or Sanad-e-Khasa (Dars-e-Nizami equivalent)',
    medium: 'Urdu, Arabic, & English Academic Research',
    overview: 'A 4-Year undergraduate university program offering scholarly depth in Quranic Sciences, Comparative Religions, Islamic Jurisprudence, Islamic Banking & Finance, and Contemporary Challenges of the Modern Era, tailored specifically for women leaders and educators.',
    curriculumStages: [
      { year: 'Semesters 1 - 2', topics: 'Study of Islamic Worldview, Introduction to Quranic Sciences, Basic Arabic Morphology & Syntax, English Communication Skills, Pakistan Studies.' },
      { year: 'Semesters 3 - 4', topics: 'History of Islamic Thought, Islamic History (Khulafa-e-Rashideen to Umayyads), Usul al-Fiqh, Ilm al-Kalam, Modern Sociology.' },
      { year: 'Semesters 5 - 6', topics: 'Textual Study of Hadith, Contemporary Islamic Jurisprudence, Dawah & its Methodology, Islamic Banking & Financial System, Research Methods.' },
      { year: 'Semesters 7 - 8', topics: 'Comparative Study of Major World Religions, Human Rights in Islam, Philosophy of Islamic Law (Maqasid ash-Shariah), Capstone Thesis / Research Project.' }
    ],
    features: [
      'Preparation for CSS/PMS, Lecturer commissions, and educational research roles',
      'Rigorous research methodology with access to our extensive Islamic library',
      'Special symposiums on women\'s legal status, domestic harmony, and community leadership'
    ]
  }
};

function initCourseModal() {
  const modalOverlay = document.getElementById('courseDetailModal');
  const closeBtn = document.getElementById('closeCourseModal');
  const modalContentContainer = document.getElementById('modalCourseDetails');

  if (!modalOverlay || !modalContentContainer) return;

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openCourseModal(courseKey) {
    const data = courseData[courseKey];
    if (!data) return;

    let stagesHtml = '';
    data.curriculumStages.forEach(stage => {
      stagesHtml += `
        <div class="p-3 bg-emerald-50/50 rounded-lg border border-emerald-900/10 mb-2">
          <span class="font-bold text-emerald-900 text-sm block">${stage.year}</span>
          <p class="text-xs text-slate-700 mt-1 leading-relaxed">${stage.topics}</p>
        </div>
      `;
    });

    let featuresHtml = '';
    data.features.forEach(feat => {
      featuresHtml += `
        <li class="flex items-start gap-2 text-xs text-slate-700">
          <svg class="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>${feat}</span>
        </li>
      `;
    });

    modalContentContainer.innerHTML = `
      <div class="p-6">
        <div class="flex items-center justify-between pb-3 border-b border-amber-200">
          <span class="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full border border-amber-300">
            ${data.badge}
          </span>
          <span class="text-xs font-semibold text-emerald-800">Women Only Campus</span>
        </div>

        <h3 class="text-xl sm:text-2xl font-serif font-bold text-emerald-950 mt-3 leading-snug">
          ${data.title}
        </h3>
        <p class="text-sm font-arabic font-bold text-amber-700 mt-1">
          ${data.arabicTitle}
        </p>

        <p class="text-sm text-slate-600 mt-3 leading-relaxed">
          ${data.overview}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div>
            <span class="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">Duration</span>
            <span class="text-xs font-bold text-emerald-900">${data.duration}</span>
          </div>
          <div>
            <span class="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">Eligibility</span>
            <span class="text-xs font-bold text-emerald-900">${data.eligibility}</span>
          </div>
        </div>

        <h4 class="text-sm font-bold text-emerald-900 mb-2 uppercase tracking-wide">
          Curriculum Outline & Subjects
        </h4>
        <div class="max-h-56 overflow-y-auto pr-1 mb-4">
          ${stagesHtml}
        </div>

        <h4 class="text-sm font-bold text-emerald-900 mb-2 uppercase tracking-wide">
          Key Highlights
        </h4>
        <ul class="space-y-1.5 mb-6">
          ${featuresHtml}
        </ul>

        <div class="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-slate-200">
          <a href="#admissions" onclick="document.getElementById('courseDetailModal').classList.remove('active'); document.body.style.overflow='';" class="btn-gold w-full sm:w-auto text-center text-sm py-2 px-5">
            Apply / Inquire for this Program
          </a>
          <button type="button" onclick="document.getElementById('courseDetailModal').classList.remove('active'); document.body.style.overflow='';" class="w-full sm:w-auto text-xs font-semibold text-slate-600 hover:text-slate-900 py-2 px-4 rounded-lg border border-slate-300">
            Close Window
          </button>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Bind to all buttons that trigger course details
  document.querySelectorAll('[data-course-key]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-course-key');
      openCourseModal(key);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ----------------------------------------------------
   4. FAQ ACCORDION
------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAns = otherItem.querySelector('.faq-answer');
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherAns) otherAns.style.maxHeight = null;
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/* ----------------------------------------------------
   5. ADMISSION INQUIRY FORM & SLIP GENERATOR
------------------------------------------------------- */
function initAdmissionForm() {
  const form = document.getElementById('admissionInquiryForm');
  const slipModal = document.getElementById('admissionSlipModal');
  const closeSlipBtn = document.getElementById('closeSlipModal');
  const printSlipBtn = document.getElementById('printSlipButton');
  const slipContainer = document.getElementById('printableSlip');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const studentName = document.getElementById('studentName')?.value.trim() || 'N/A';
    const guardianName = document.getElementById('guardianName')?.value.trim() || 'N/A';
    const contactNumber = document.getElementById('contactNumber')?.value.trim() || 'N/A';
    const whatsappNumber = document.getElementById('whatsappNumber')?.value.trim() || contactNumber;
    const selectedCourse = document.getElementById('selectedCourse')?.value || 'Dars-e-Nizami (6 Years)';
    const qualification = document.getElementById('previousQualification')?.value.trim() || 'Not specified';
    const residentialPref = document.getElementById('residentialStatus')?.value || 'Day Scholar';
    const notes = document.getElementById('additionalNotes')?.value.trim() || 'None';

    // Generate Inquiry Application Tracking ID
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const trackingId = `DM-${new Date().getFullYear()}-${randomCode}`;
    const submissionDate = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const inquiryRecord = {
      trackingId,
      studentName,
      guardianName,
      contactNumber,
      whatsappNumber,
      selectedCourse,
      qualification,
      residentialPref,
      notes,
      submissionDate,
      status: 'Inquiry Submitted / Pending Verification'
    };

    // Save to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('darululoom_inquiries') || '[]');
      existing.push(inquiryRecord);
      localStorage.setItem('darululoom_inquiries', JSON.stringify(existing));
    } catch (err) {
      console.warn('Storage unavailable', err);
    }

    // Populate Printable Slip
    if (slipContainer) {
      slipContainer.innerHTML = `
        <div class="border-2 border-emerald-900 p-6 rounded-2xl bg-white text-slate-800 font-sans shadow-lg relative">
          <!-- Watermark / Header Pattern -->
          <div class="text-center pb-4 border-b-2 border-amber-300 mb-4">
            <p class="font-arabic text-xl font-bold text-emerald-900 mb-1">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
            <h2 class="text-2xl font-serif font-black text-emerald-950 uppercase tracking-wider">
              Dar ul Uloom Rizvia Masoomia
            </h2>
            <p class="font-urdu text-sm font-bold text-amber-700">دار العلوم رضویہ معصومیہ (برائے طالبات)</p>
            <p class="text-xs text-slate-600 mt-1">Exclusively for Female Students • Islamic & Contemporary Education</p>
            <div class="mt-2 inline-block bg-emerald-900 text-amber-300 px-3 py-1 text-xs font-bold rounded-full">
              OFFICIAL ADMISSION INQUIRY ACKNOWLEDGMENT SLIP
            </div>
          </div>

          <div class="flex flex-wrap justify-between items-center text-xs mb-4 bg-emerald-50/60 p-3 rounded-lg border border-emerald-200">
            <div>
              <span class="font-bold text-slate-600">Inquiry ID:</span>
              <span class="font-mono font-bold text-emerald-900 text-sm">${trackingId}</span>
            </div>
            <div>
              <span class="font-bold text-slate-600">Date of Application:</span>
              <span class="font-semibold text-slate-800">${submissionDate}</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-4">
            <div class="space-y-2">
              <div>
                <span class="text-slate-500 font-semibold block uppercase text-[10px]">Applicant (Student Name):</span>
                <span class="text-sm font-bold text-slate-900">${studentName}</span>
              </div>
              <div>
                <span class="text-slate-500 font-semibold block uppercase text-[10px]">Father / Guardian Name:</span>
                <span class="text-sm font-bold text-slate-900">${guardianName}</span>
              </div>
              <div>
                <span class="text-slate-500 font-semibold block uppercase text-[10px]">Primary Contact Phone:</span>
                <span class="font-mono font-bold text-emerald-900">${contactNumber}</span>
              </div>
            </div>

            <div class="space-y-2">
              <div>
                <span class="text-slate-500 font-semibold block uppercase text-[10px]">Applied Academic Program:</span>
                <span class="text-sm font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">${selectedCourse}</span>
              </div>
              <div>
                <span class="text-slate-500 font-semibold block uppercase text-[10px]">Previous Education:</span>
                <span class="font-semibold text-slate-900">${qualification}</span>
              </div>
              <div>
                <span class="text-slate-500 font-semibold block uppercase text-[10px]">Campus Attendance Preference:</span>
                <span class="font-semibold text-slate-900">${residentialPref}</span>
              </div>
            </div>
          </div>

          <!-- Notes -->
          <div class="text-xs bg-slate-50 p-2.5 rounded border border-slate-200 mb-4">
            <span class="font-bold text-slate-600">Applicant Notes / Inquiries:</span>
            <p class="text-slate-700 italic mt-0.5">${notes}</p>
          </div>

          <!-- Direct Administration Contacts -->
          <div class="border-t border-dashed border-slate-300 pt-3 mb-4 text-xs">
            <p class="font-bold text-emerald-950 mb-1">Administrative Guidance & Verification Contacts:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700">
              <div class="bg-amber-50/70 p-2 rounded border border-amber-200">
                <span class="font-bold text-slate-900 block">Principal: Sufi Jamshaid Alam</span>
                <span>Direct Phone: <a href="tel:03335861005" class="font-mono font-bold text-emerald-800 underline">03335861005</a></span>
              </div>
              <div class="bg-emerald-50/70 p-2 rounded border border-emerald-200">
                <span class="font-bold text-slate-900 block">Vice Principal: Allama Ahmad Raza Khan</span>
                <span>Direct Cell: <a href="tel:03078498008" class="font-mono font-bold text-emerald-800 underline">03078498008</a></span>
              </div>
            </div>
          </div>

          <!-- Instructions -->
          <div class="text-[11px] text-slate-600 bg-emerald-900 text-white p-3 rounded-xl mb-4">
            <p class="font-bold text-amber-300 mb-0.5">Next Steps for Enrollment:</p>
            <ol class="list-decimal list-inside space-y-0.5 text-emerald-100">
              <li>Please keep this Inquiry Reference Code (<strong class="text-white">${trackingId}</strong>) safe for follow-up.</li>
              <li>You may contact the Principal or Vice Principal on the numbers above or visit during campus office hours.</li>
              <li>Bring previous educational certificates, B-Form/CNIC copy, and 2 passport photos for interview.</li>
            </ol>
          </div>

          <div class="flex justify-between items-end pt-3 text-[10px] text-slate-400">
            <span>Official Computer Generated Slip • Dar ul Uloom Rizvia Masoomia</span>
            <span>Signature / Stamp Space: _________________</span>
          </div>
        </div>
      `;
    }

    // Open Modal
    if (slipModal) {
      slipModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    showToast('Inquiry submitted successfully! Your tracking slip is ready.');
    form.reset();
  });

  if (closeSlipBtn && slipModal) {
    closeSlipBtn.addEventListener('click', () => {
      slipModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (printSlipBtn) {
    printSlipBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ----------------------------------------------------
   6. CONTACT FORM SYSTEM & WHATSAPP
------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('generalContactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value.trim() || 'Visitor';
    const phone = document.getElementById('contactPhone')?.value.trim() || '';
    const subject = document.getElementById('contactSubject')?.value.trim() || 'General Inquiry';
    const msg = document.getElementById('contactMessage')?.value.trim() || '';

    // Create WhatsApp formatted link to Vice Principal or Principal
    const cleanNumber = '923078498008'; // Allama Ahmad Raza Khan
    const textMsg = encodeURIComponent(
      `Assalam-o-Alaikum,\n\nI have an inquiry regarding Dar ul Uloom Rizvia Masoomia:\n*Name:* ${name}\n*Phone:* ${phone}\n*Subject:* ${subject}\n*Message:* ${msg}`
    );
    const waUrl = `https://wa.me/${cleanNumber}?text=${textMsg}`;

    showToast('Thank you! Redirecting to WhatsApp to send your inquiry directly...', 4000);

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);

    contactForm.reset();
  });
}

/* ----------------------------------------------------
   7. SMOOTH SCROLLING & ACTIVE LINK HIGHLIGHT
------------------------------------------------------- */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ----------------------------------------------------
   8. TOAST NOTIFICATION UTILITY
------------------------------------------------------- */
function showToast(message, duration = 3500) {
  let toast = document.getElementById('appToastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToastNotification';
    toast.className = 'fixed bottom-5 left-1/2 transform -translate-x-1/2 z-[3000] bg-emerald-950 text-white px-5 py-3 rounded-xl shadow-2xl border border-amber-400 text-sm font-semibold flex items-center gap-3 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-5 h-5 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
    </svg>
    <span>${message}</span>
  `;

  // Show
  toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
  }, duration);
}
