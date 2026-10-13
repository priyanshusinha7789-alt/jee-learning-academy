# HALDIA LEARNING ACADEMY — Official Website & Lead Capture Platform (Haldia Campus)

An agency-grade, high-converting web product for **HALDIA LEARNING ACADEMY**, Haldia's premier coaching institute for Foundation, Boards, and JEE/NEET competitive preparation.

---

## 📍 Campus Location & Details

- **Official Campus:** Haldia Central Campus
- **Address:** City Centre Complex, Sector 1, Haldia, West Bengal - 721657 *(Near City Super Market & Haldia Bus Terminus)*
- **Contact Helplines:** `+91 98321 45670 / +91 98321 45671`
- **Admissions Email:** `admissions@haldialearningacademy.com`
- **Academic Hours:** `Mon–Sat: 8:30 AM – 8:00 PM | Sun: 9:00 AM – 3:00 PM`

---

## 🚀 Key Client Features & Upgrades

### 1. Chapter-Wise Duration Curriculum & Interactive Roadmap
- **Detailed Chapter-by-Chapter Day & Hour Timeline:**
  - Physics, Chemistry, Mathematics, and Biology curriculums detailed chapter-wise with exact day and hour allocations.
  - Interactive subject filters (`All`, `Physics`, `Chemistry`, `Mathematics`, `Biology`) and milestone badges.
- **True Client-Side PDF Generation (`jspdf` + `jspdf-autotable`):**
  - Clicking *"Download Full Schedule & Syllabus PDF"* generates a real `.pdf` with:
    - Official Navy `#14213D` and Orange `#FF7A30` header branding.
    - Verified Haldia Central Campus seal and helpline metadata.
    - Structured tables for **Confirmed Batch Schedule & Timings** (Weekday & Weekend batches).
    - Exhaustive chapter-by-chapter day allocations and milestone test schedules.
    - Included study materials, weekly DPP schedules, and computer-based testing (CBT) protocols.
- **Dedicated In-Browser Modal View:**
  - Displays batch schedules, curriculum modules, chapter timelines, and direct *"Download Official PDF"* and *"Register for Batch"* actions.

### 2. Explicit Course Batch Schedules & Direct Registration
- Every course card provides transparent, direct schedule information on the card itself:
  - **Foundation (Classes 6–8):** Mon, Wed, Fri 4:00 PM – 6:30 PM | Sat & Sun 9:00 AM – 1:30 PM
  - **Secondary (Classes 9–10):** Tue, Thu, Sat 4:30 PM – 7:30 PM | Sun Mock 9:00 AM – 12:00 PM
  - **Higher Secondary (Classes 11–12 Science):** Mon, Wed, Fri 4:30 PM – 8:00 PM | Sun Unit Mock 8:30 AM – 11:30 AM
  - **JEE & NEET Elite Pinnacle:** Mon to Sat 3:30 PM – 8:00 PM | Full CBT Mock Sundays
- Direct, transparent actions: *"Register for Batch"* and *"Batch Schedule & Chapter Timeline"*.

### 3. High-Impact Visuals & Authority
- **Impact Counter Strip:**
  - `1,200+ Selections` | `98.4% Success Rate` | `15+ Top 100 AIRs` | `24/7 Doubt Resolution`
- **Top Achievers / Results Gallery:**
  - High-impact student hall-of-fame cards with real exam scores, AIR ranks, admitted colleges (IIT Bombay, IIT Kharagpur, AIIMS, etc.), and quotes.
  - Interactive filter tabs: **All**, **JEE Advanced**, **JEE Main**, **NEET / Olympiad**.
- **Master Faculty Profiles with Professional Portraits:**
  - **Dr. Rajesh Verma** — Senior Physics Faculty & Academic Director (B.Tech & Ph.D. Ex-IIT Kharagpur, 14+ yrs exp)
  - **Neha Agarwal** — Lead Chemistry Mentor & HOD (M.Sc. Gold Medalist, 11+ yrs exp)
  - **Prof. Amitava Sen** — Head of Mathematics (M.Stat ISI Kolkata Alum, 16+ yrs exp)

### 4. Client-Side Lead Capture & Local Backend System
- **Popup Enquiry Modal:**
  - Triggered by clicking any *"Enquire Now"* or *"Register for Batch"* button.
  - Fields: Student Name, WhatsApp/Parent Mobile, Current Class, Target Course, Batch Timing Preference, and City/Town (defaults to Haldia).
  - Full client-side input validation and error states.
  - Automatic rich WhatsApp message generation formatted with student name, course details, chapter duration sample, and campus contact.
- **Local Storage Database:**
  - Saves all submitted leads into browser `localStorage` under `jee_leads_data`.
  - Fires a smooth toast notification upon successful submission.
- **Admin Leads Dashboard & CSV Export:**
  - Accessible via the discreet **"Admin Leads Portal"** link in the footer or by pressing the shortcut **`Ctrl + Shift + A`** (or `Cmd + Shift + A` on macOS).
  - Search and filter through stored leads in real time.
  - **Export to CSV**: Generates a standard `.csv` spreadsheet of all incoming leads for admission counselors.

---

## 💻 How to Run Locally

```bash
# 1. Open terminal inside the project directory:
cd haldia-learning-academy

# 2. Install dependencies:
npm install

# 3. Start local development server:
npm run dev

# 4. Build for production:
npm run build
```

---

## 🚢 Deployment to Vercel or Netlify

This project includes a pre-configured `vercel.json` and static Single Page Application build configuration.

To deploy via Vercel CLI:
```bash
npx vercel
```
Or drag and drop the `dist/` folder after running `npm run build` into Netlify Drop.
