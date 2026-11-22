# Dar ul Uloom Rizvia Masoomia (دار العلوم رضویہ معصومیہ)
### Islamic Educational Institution Exclusively for Women | جامعہ دار العلوم رضویہ معصومیہ برائے طالبات

A complete, respectful, modern, and mobile-responsive website built for **Dar ul Uloom Rizvia Masoomia**, an Islamic educational institution exclusively for female students ("For All Women Only"), with a flagship emphasis on the comprehensive **6-Year Dars-e-Nizami** program alongside contemporary academic programs (**Middle, Matric, F.A., and B.S. Islamic Studies**).

---

## 🌟 Key Features & Academic Highlights

1. **Exclusively For Female Students ("For All Women Only"):**
   - Highlighting a 100% women-only, dignified, safe, and Purdah-compliant environment.
   - Complete female teaching faculty & resident wardens for all direct classroom and hostel mentoring.

2. **Featured Academic Programs:**
   - **6-Year Dars-e-Nizami (Flagship Alimah Course):** Classical Islamic scholarship covering Sarf, Nahw, Hanafi Fiqh, Usul al-Fiqh, Balaghat, Mantiq, Tafsir al-Jalalayn, and culminating in Daura-e-Hadith (Kutub al-Sittah).
   - **Middle School (Grades 6 to 8):** Dual curriculum combining general modern schooling with Quranic Nazra, Tajweed, and Adab.
   - **Matriculation (Grades 9 & 10):** BISE board affiliated Science and Arts groups with Tarjuma-tul-Quran curriculum.
   - **F.A. (Higher Secondary Certificate):** Intermediate in Arts with Islamic Studies, Arabic, Civics, and Education.
   - **B.S. Islamic Studies:** 4-Year (8 Semesters) undergraduate higher education degree program.

3. **Administration & Faculty Directory:**
   - **Principal:** Sufi Jamshaid Alam — Direct Phone: `03335861005`
   - **Vice Principal:** Allama Ahmad Raza Khan — Direct Cell: `03078498008`
   - **Senior Faculty Member:** Ayesha Ijaz (Women's Wing & Tajweed)

4. **Interactive Admissions System:**
   - Online Admission Inquiry Form that validates inputs and **instantly generates a printable Official Inquiry Acknowledgment Slip** with a unique tracking code (e.g. `DM-2026-XXXX`).
   - LocalStorage backup for submitted inquiries.
   - One-click print / save to PDF.

5. **WhatsApp & Direct Calling Integration:**
   - One-click direct calling (`tel:`) buttons to Principal (`03335861005`) and Vice Principal (`03078498008`).
   - WhatsApp direct-chat button with pre-filled greeting message.

6. **Islamic Aesthetic & Modern UX:**
   - Majestic emerald green (`#064E3B`), luminous gold (`#D4AF37`), and cream/ivory palettes.
   - Custom SVG Islamic geometric patterns, 8-point stars (Rub el Hizb), and Bismillah calligraphy.
   - Full mobile navigation drawer and accessible typography.

---

## 📁 Project Directory Structure

```text
R M P/
├── index.html            # Master flagship portal (Hero, About, 6-Year Dars-e-Nizami, Courses, Leadership, Admissions, FAQs, Contact)
├── about.html            # Dedicated About Us page
├── courses.html          # Dedicated Academic Programs & 6-Year Dars-e-Nizami syllabus guide
├── faculty.html          # Dedicated Leadership & Faculty directory
├── admissions.html       # Dedicated Admissions criteria, fees, & interactive application form
├── contact.html          # Dedicated Contact & campus visit information
├── assets/
│   ├── css/
│   │   └── styles.css    # Custom Islamic styling, emerald-gold themes, typography, and print styles
│   ├── js/
│   │   └── main.js       # Mobile navigation, course modals, slip generator, WhatsApp handlers, FAQ accordion
│   └── images/
│       ├── logo.svg           # High-resolution vector emblem with Arabic/English typography
│       ├── bismillah.svg      # Elegant Bismillah-ir-Rahman-ir-Rahim vector artwork
│       ├── arabic-border.svg  # Islamic geometric ornamental divider
│       └── pattern.svg        # Islamic arabesque geometric background pattern
└── README.md             # Documentation and customization guide
```

---

## 🚀 How to Run & Deploy

This website is built with clean, standards-compliant HTML5, Tailwind CSS, and vanilla JavaScript. It requires **no build step** or Node.js environment to run.

### Method 1: Direct File Opening
Double-click `index.html` in your file explorer to open it immediately in any modern web browser (Chrome, Edge, Firefox, Safari).

### Method 2: Local Web Server
You can serve the folder using any static web server:
- **PowerShell:** Run a quick static listener, or
- **VS Code:** Right click `index.html` and click **"Open with Live Server"**, or
- **Python (if installed):** `python -m http.server 8000`

### Method 3: Hosting / Production Deployment
Upload all files directly to any hosting platform:
- **cPanel / Apache / Nginx:** Upload all files to `public_html/`.
- **GitHub Pages:** Push to a repository and enable GitHub Pages in settings.
- **Netlify / Vercel:** Drag and drop the folder for instant deployment with SSL.

---

## ⚙️ Customization & Editable Placeholders

All editable fields are clearly labeled with brackets `[...]` or clean IDs:
- **Campus Address:** Search for `[Campus Address: ...]` in `index.html`, `contact.html`, and `about.html` to update with your exact street/city location.
- **Official Email:** Update `info@rizviamasoomia.edu.pk` with your actual institutional email address.
- **Academic Session Dates:** Update `Session 2026–2027` across the hero badges and admission headings if you wish to adjust the intake year.
- **Faculty / Leadership:** Principal phone (`03335861005`) and Vice Principal cell (`03078498008`) can be updated easily in the top bar, leadership cards, and `main.js` WhatsApp handler.

---

## 📜 Copyright
&copy; 2026 **Dar ul Uloom Rizvia Masoomia**. All Rights Reserved. Exclusively For All Women Only.
