// Centralized configuration for HALDIA LEARNING ACADEMY — Haldia Central Campus
// High-converting agency-grade dataset and business configuration

export const ACADEMY_CONFIG = {
  name: "HALDIA LEARNING ACADEMY",
  shortName: "HLA",
  tagline: "Your Ambition. Our Guidance. Your Success.",
  trustMotto: "Learn Better. Grow Confidently. Achieve More.",
  academicYear: "2026–27",
  campusCity: "Haldia",
  campusLocationName: "Haldia Central Campus",
  
  // Official Institute Contact Details (Haldia, West Bengal)
  contact: {
    displayPhone: "+91 98321 45670 / +91 98321 45671",
    rawPhone: "919832145670",
    whatsappNumber: "919832145670",
    whatsappHelpText: "Direct admissions and seat reservation line for Haldia Central Campus.",
    email: "admissions@haldialearningacademy.com",
    address: {
      line1: "City Centre Complex, Sector 1",
      city: "Haldia",
      state: "West Bengal",
      pinCode: "721657",
      landmark: "Near City Super Market & Haldia Bus Terminus",
      full: "City Centre Complex, Sector 1, Haldia, West Bengal - 721657"
    },
    openingHours: "Monday – Saturday: 8:30 AM – 8:00 PM | Sunday: 9:00 AM – 3:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=City+Centre+Sector+1+Haldia+West+Bengal"
  },

  socialLinks: [
    { label: "YouTube (Lectures & Concept Boosters)", url: "https://youtube.com", iconName: "Youtube" },
    { label: "Telegram (DPPs & Formula Compendiums)", url: "https://telegram.org", iconName: "Send" },
    { label: "LinkedIn (Academic Updates)", url: "https://linkedin.com", iconName: "Linkedin" }
  ]
};

export const IMPACT_METRICS = [
  {
    id: "selections",
    value: "1,200+",
    label: "Total Selections",
    subtext: "Across IITs, NITs, BITS & Top Medical Colleges",
    icon: "Award"
  },
  {
    id: "success-rate",
    value: "98.4%",
    label: "Board & Entrance Success",
    subtext: "Consistent 90%+ in Board Exams & Cutoff Cleared",
    icon: "TrendingUp"
  },
  {
    id: "top-airs",
    value: "15+",
    label: "Top 100 All India Ranks",
    subtext: "Proven national-level top rank pedagogy",
    icon: "Sparkles"
  },
  {
    id: "doubt-support",
    value: "24/7",
    label: "Doubt Resolution Hub",
    subtext: "On-campus daily desk & digital mentor support",
    icon: "Clock"
  }
];

export const HIGHLIGHT_CARDS = [
  {
    id: "faculty",
    title: "Ex-IITian & Gold Medalist Faculty",
    description: "Learn directly from full-time educators who have produced top AIRs through structured first-principles pedagogy.",
    icon: "GraduationCap",
    accent: "electric",
    badge: "Master Faculty"
  },
  {
    id: "attention",
    title: "Strict 35-Student Batch Limit",
    description: "Every student is assigned a dedicated faculty mentor to track weekly mock test accuracy and concept gaps.",
    icon: "Users",
    accent: "orange",
    badge: "Personalised Batches"
  },
  {
    id: "concepts",
    title: "Concept-First Analytical Rigor",
    description: "No rote memorization. Master step-by-step mathematical derivations and real-world physical intuitions.",
    icon: "Lightbulb",
    accent: "teal",
    badge: "Zero Rote Learning"
  },
  {
    id: "tests",
    title: "National-Pattern AI Test Series",
    description: "Bi-weekly CBT (Computer-Based Tests) with granular question-level speed, accuracy, and negative-mark analysis.",
    icon: "ClipboardCheck",
    accent: "navy",
    badge: "All-India Benchmarking"
  }
];

export const COURSES = [
  {
    id: "competitive",
    title: "JEE & NEET Elite Pinnacle",
    target: "JEE (Main + Adv) / NEET-UG (Rankers Track)",
    category: "Intensive Ranker Track",
    batchBadge: "Batch Starts: 12th Nov 2026",
    seatsLeft: "Last 3 Seats",
    batchSchedule: {
      regular: "Regular Evening Batch: 4:30 PM – 7:30 PM",
      weekend: "Weekend Ranker Batch: 9:00 AM – 2:00 PM",
      cbtSlot: "Full CBT Mock Exam: Sundays 9:00 AM – 12:00 PM (JEE) / 2:00 PM – 5:20 PM (NEET)",
      doubtSlot: "Permanent Faculty Desks: Open 10:00 AM – 8:00 PM"
    },
    description: "Our flagship rank-producer program designed for serious aspirants targeting Top 500 AIRs in JEE Advanced and premier Government Medical Colleges.",
    features: [
      "Phase 1 & Phase 2 Schedules with Triple Revision Cycles",
      "3-tier problem sets (Advanced Multi-Correct, Matrix Match & Integer Type)",
      "Strict CBT computer-lab simulated full syllabus test series"
    ],
    accentColor: "border-purple-500 text-purple-600 bg-purple-50",
    badgeColor: "bg-purple-100 text-purple-800",
    pillTag: "JEE / NEET Flagship",
    chapterRoadmap: [
      // Physics Breakdown
      { chapter: "Units, Dimensions & Errors", subject: "Physics", days: 5, hours: 10, milestone: "DPP 1-3 + Error Analysis Log", faculty: "Dr. Rajesh Verma (Ex-IIT Kharagpur)" },
      { chapter: "Kinematics (1D & 2D Motion)", subject: "Physics", days: 10, hours: 20, milestone: "Weekly Test 1 + Graphical Calculus Drills", faculty: "Dr. Rajesh Verma (Ex-IIT Kharagpur)" },
      { chapter: "Laws of Motion & Friction", subject: "Physics", days: 9, hours: 18, milestone: "Constraint Equations + Free-Body Lab", faculty: "Dr. Rajesh Verma (Ex-IIT Kharagpur)" },
      { chapter: "Work, Power & Energy", subject: "Physics", days: 8, hours: 16, milestone: "Conservative Forces & Vertical Circle CBT", faculty: "Dr. Rajesh Verma (Ex-IIT Kharagpur)" },
      { chapter: "Rotational Motion & Rigid Body", subject: "Physics", days: 14, hours: 28, milestone: "Advanced Multi-Correct Master Test", faculty: "Dr. Rajesh Verma (Ex-IIT Kharagpur)" },
      { chapter: "Thermodynamics & KTG", subject: "Physics", days: 11, hours: 22, milestone: "Heat Engine & Cyclic Processes Exam", faculty: "Dr. Rajesh Verma (Ex-IIT Kharagpur)" },
      { chapter: "Electrostatics & Current Electricity", subject: "Physics", days: 16, hours: 32, milestone: "Field Symmetry & Kirchhoff's Law Drills", faculty: "Dr. Rajesh Verma (Ex-IIT Kharagpur)" },
      { chapter: "Optics (Ray Optics & Wave Optics)", subject: "Physics", days: 15, hours: 30, milestone: "Prisms, Lenses & YDSE Pattern Test", faculty: "Dr. Rajesh Verma (Ex-IIT Kharagpur)" },

      // Chemistry Breakdown
      { chapter: "Some Basic Concepts of Chemistry (Mole Concept)", subject: "Chemistry", days: 7, hours: 14, milestone: "Stoichiometry & Redox Titration DPPs", faculty: "Neha Agarwal (M.Sc. Gold Medalist)" },
      { chapter: "Atomic Structure & Quantum Mechanics", subject: "Chemistry", days: 8, hours: 16, milestone: "Photoelectric & Quantum Number Test", faculty: "Neha Agarwal (M.Sc. Gold Medalist)" },
      { chapter: "Chemical Kinetics & Radioactivity", subject: "Chemistry", days: 12, hours: 24, milestone: "Rate Laws & Arrhenius Equation Benchmarking", faculty: "Neha Agarwal (M.Sc. Gold Medalist)" },
      { chapter: "Chemical & Ionic Equilibrium", subject: "Chemistry", days: 14, hours: 28, milestone: "Buffer Solutions & Solubility Product Exam", faculty: "Neha Agarwal (M.Sc. Gold Medalist)" },
      { chapter: "Thermodynamics & Thermochemistry", subject: "Chemistry", days: 12, hours: 24, milestone: "Entropy, Gibbs Free Energy & Enthalpy Drills", faculty: "Neha Agarwal (M.Sc. Gold Medalist)" },
      { chapter: "Coordination Compounds & Bonding", subject: "Chemistry", days: 10, hours: 20, milestone: "CFT, Isomerism & Werner's Theory CBT", faculty: "Neha Agarwal (M.Sc. Gold Medalist)" },
      { chapter: "Organic Chemistry: Reaction Mechanisms & Hydrocarbons", subject: "Chemistry", days: 18, hours: 36, milestone: "Electrophilic Addition & Named Reactions Lab", faculty: "Neha Agarwal (M.Sc. Gold Medalist)" },

      // Mathematics / Biology Breakdown
      { chapter: "Coordinate Geometry (Straight Lines, Circles & Conics)", subject: "Mathematics", days: 14, hours: 28, milestone: "Locus Problems & Parabola/Hyperbola Test", faculty: "Prof. Amitava Sen (ISI Kolkata)" },
      { chapter: "Differential & Integral Calculus", subject: "Mathematics", days: 22, hours: 44, milestone: "Limits, Continuity, Maxima/Minima & Definite Integrals Grand Test", faculty: "Prof. Amitava Sen (ISI Kolkata)" },
      { chapter: "Vectors & 3D Geometry", subject: "Mathematics", days: 10, hours: 20, milestone: "Dot/Cross Products & Skew Lines Accuracy Drill", faculty: "Prof. Amitava Sen (ISI Kolkata)" },
      { chapter: "Cell Biology & Genetics (for NEET track)", subject: "Biology", days: 18, hours: 36, milestone: "Mendelian Genetics & Molecular Basis OMR Mock", faculty: "Dr. S. K. Roy (MBBS, Senior Faculty)" }
    ]
  },
  {
    id: "higher-secondary",
    title: "Higher Secondary (Science)",
    target: "Classes 11–12, Science (PCM / PCB)",
    category: "Academic & Competitive",
    batchBadge: "Batch Starts: 20th Nov 2026",
    seatsLeft: "8 Seats Remaining",
    batchSchedule: {
      regular: "Regular Evening Batch: 4:30 PM – 7:30 PM",
      weekend: "Weekend Morning Batch: 8:30 AM – 1:30 PM",
      cbtSlot: "Sunday Unit Mock: 8:30 AM – 11:30 AM",
      doubtSlot: "Dedicated 1-on-1 Faculty Doubt Desk: Daily 10 AM – 7:30 PM"
    },
    description: "Intensive 2-year classroom program balancing 95%+ Board scoring with rigorous conceptual depth required for national medical and engineering exams.",
    features: [
      "Board exam precision masterclasses with model answer keys",
      "Calculus, Organic mechanisms & Electrodynamics deep-dives",
      "Topic-wise Daily Practice Problems (DPPs) with video solutions"
    ],
    accentColor: "border-orange-500 text-orange-600 bg-orange-50",
    badgeColor: "bg-orange-100 text-orange-800",
    pillTag: "Classes 11–12 Science",
    chapterRoadmap: [
      { chapter: "Units, Dimensions & Error Analysis", subject: "Physics", days: 5, hours: 10, milestone: "Vernier, Screw Gauge Lab + Error DPPs", faculty: "Dr. Rajesh Verma (Ex-IITian)" },
      { chapter: "Kinematics & Projectile Motion", subject: "Physics", days: 10, hours: 20, milestone: "Weekly Board & Objective Combined Assessment", faculty: "Dr. Rajesh Verma (Ex-IITian)" },
      { chapter: "Laws of Motion & Friction", subject: "Physics", days: 9, hours: 18, milestone: "Subjective Board Derivations + Objective Test", faculty: "Dr. Rajesh Verma (Ex-IITian)" },
      { chapter: "Rotational Dynamics & Moment of Inertia", subject: "Physics", days: 14, hours: 28, milestone: "Rolling Motion & Angular Momentum Master Review", faculty: "Dr. Rajesh Verma (Ex-IITian)" },
      { chapter: "Chemical Bonding & Molecular Structure", subject: "Chemistry", days: 11, hours: 22, milestone: "VSEPR & Hybridization Descriptive Test", faculty: "Neha Agarwal (Gold Medalist)" },
      { chapter: "Chemical Thermodynamics & Equilibrium", subject: "Chemistry", days: 14, hours: 28, milestone: "Numerical Problem Solving Workshop", faculty: "Neha Agarwal (Gold Medalist)" },
      { chapter: "General Organic Chemistry (GOC) & Mechanisms", subject: "Chemistry", days: 16, hours: 32, milestone: "Inductive, Resonance & Carbocation Drills", faculty: "Neha Agarwal (Gold Medalist)" },
      { chapter: "Differential & Integral Calculus", subject: "Mathematics", days: 22, hours: 44, milestone: "Board Format Proofs + Speed Tests", faculty: "Prof. Amitava Sen (ISI Kolkata)" },
      { chapter: "Vectors, 3D Geometry & Linear Programming", subject: "Mathematics", days: 10, hours: 20, milestone: "Formula Sheets & Board Scoring Drills", faculty: "Prof. Amitava Sen (ISI Kolkata)" }
    ]
  },
  {
    id: "secondary",
    title: "Secondary Preparation",
    target: "Classes 9–10 (Board & Pre-JEE/NEET)",
    category: "Board & Pre-JEE/NEET",
    batchBadge: "Batch Starts: 18th Nov 2026",
    seatsLeft: "4 Seats Remaining",
    batchSchedule: {
      regular: "Regular Evening Batch: 4:30 PM – 7:30 PM",
      weekend: "Weekend Morning Batch: 8:30 AM – 1:00 PM",
      cbtSlot: "Sunday Comprehensive Test: 9:00 AM – 12:00 PM",
      doubtSlot: "Walk-in Doubt Hours: Daily 7:30 PM – 8:30 PM"
    },
    description: "Master Class 9 & 10 CBSE/ICSE/State Board curriculum with 100% board precision while building an early competitive foundation for Class 11 science streams.",
    features: [
      "Exhaustive Board Syllabus Roadmap with 100% NCERT coverage",
      "NTSE & National Science/Math Olympiad problem solving modules",
      "Bi-weekly subjective answer-writing drills & objective speed tests"
    ],
    accentColor: "border-electric-500 text-electric-600 bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-800",
    pillTag: "Classes 9–10",
    chapterRoadmap: [
      { chapter: "Motion, Force & Newton's Laws", subject: "Physics", days: 12, hours: 24, milestone: "Kinematic Equations & Graphical Derivations", faculty: "Dr. Rajesh Verma (Ex-IITian)" },
      { chapter: "Gravitation, Work & Energy", subject: "Physics", days: 10, hours: 20, milestone: "Weekly Board Mock + Numerical Sheets", faculty: "Dr. Rajesh Verma (Ex-IITian)" },
      { chapter: "Current Electricity & Magnetic Effects", subject: "Physics", days: 14, hours: 28, milestone: "Ohm's Law, Solenoid & Motor Principle Test", faculty: "Dr. Rajesh Verma (Ex-IITian)" },
      { chapter: "Light: Reflection & Refraction", subject: "Physics", days: 12, hours: 24, milestone: "Ray Diagram Precision Masterclass", faculty: "Dr. Rajesh Verma (Ex-IITian)" },
      { chapter: "Chemical Reactions & Equations", subject: "Chemistry", days: 8, hours: 16, milestone: "Equation Balancing & Redox Reactions Test", faculty: "Neha Agarwal (Gold Medalist)" },
      { chapter: "Acids, Bases, Salts & Metals", subject: "Chemistry", days: 12, hours: 24, milestone: "pH Scale & Extraction of Metals Review", faculty: "Neha Agarwal (Gold Medalist)" },
      { chapter: "Carbon & its Compounds (Organic Basics)", subject: "Chemistry", days: 14, hours: 28, milestone: "IUPAC Nomenclature & Functional Groups Exam", faculty: "Neha Agarwal (Gold Medalist)" },
      { chapter: "Quadratic Equations & Arithmetic Progressions", subject: "Mathematics", days: 12, hours: 24, milestone: "Word Problems & Speed Drills", faculty: "Prof. Amitava Sen (ISI Kolkata)" },
      { chapter: "Trigonometry & Heights/Distances", subject: "Mathematics", days: 14, hours: 28, milestone: "Identity Proofs & Angle Elevation Drills", faculty: "Prof. Amitava Sen (ISI Kolkata)" },
      { chapter: "Coordinate Geometry, Circles & Surface Areas", subject: "Mathematics", days: 15, hours: 30, milestone: "Board Model Test Paper Review", faculty: "Prof. Amitava Sen (ISI Kolkata)" }
    ]
  },
  {
    id: "foundation",
    title: "Foundation Classes",
    target: "Classes 6–8 (Junior Foundation)",
    category: "Junior Foundation",
    batchBadge: "Batch Starts: 15th Nov 2026",
    seatsLeft: "6 Seats Remaining",
    batchSchedule: {
      regular: "Regular Evening Batch: 4:00 PM – 6:30 PM",
      weekend: "Weekend Morning Batch: 9:00 AM – 1:30 PM",
      cbtSlot: "Bi-weekly Aptitude Review: Saturdays 2:00 PM – 4:00 PM",
      doubtSlot: "Daily Doubt Clinic: 6:30 PM – 7:30 PM"
    },
    description: "Nurture early scientific curiosity, mental aptitude, and Olympiad problem-solving instincts with dedicated child-friendly modules synchronized with school boards.",
    features: [
      "Mental Ability & Logical Reasoning (Number series, spatial & verbal aptitude)",
      "Science Foundation (Physics, Chemistry, Biology visual demonstrations)",
      "Mathematics Olympiad Foundations (Number theory, Geometry axioms & Vedic Math)"
    ],
    accentColor: "border-teal-500 text-teal-600 bg-teal-50",
    badgeColor: "bg-teal-100 text-teal-800",
    pillTag: "Classes 6–8",
    chapterRoadmap: [
      { chapter: "Mental Ability: Number Series & Patterns", subject: "Aptitude", days: 8, hours: 16, milestone: "Logical Reasoning Quiz + Puzzle Sheets", faculty: "Prof. Amitava Sen (ISI Kolkata)" },
      { chapter: "Mental Ability: Coding-Decoding & Direction Sense", subject: "Aptitude", days: 8, hours: 16, milestone: "Weekly Aptitude Diagnostic Test", faculty: "Prof. Amitava Sen (ISI Kolkata)" },
      { chapter: "Physics: Motion, Light & Sound in Everyday Life", subject: "Science", days: 12, hours: 24, milestone: "Visual Experiments & Concept Quiz", faculty: "Dr. Rajesh Verma (Ex-IITian)" },
      { chapter: "Physics: Electricity, Circuits & Magnets", subject: "Science", days: 10, hours: 20, milestone: "Hands-on Circuit Making Session", faculty: "Dr. Rajesh Verma (Ex-IITian)" },
      { chapter: "Chemistry: Matter, Elements, Compounds & Mixtures", subject: "Science", days: 10, hours: 20, milestone: "Separation Techniques Lab Worksheet", faculty: "Neha Agarwal (Gold Medalist)" },
      { chapter: "Chemistry: Acids, Bases & Natural Indicators", subject: "Science", days: 8, hours: 16, milestone: "Litmus & Turmeric Demonstration Review", faculty: "Neha Agarwal (Gold Medalist)" },
      { chapter: "Math: Number Systems, Primes & Divisibility Axioms", subject: "Mathematics", days: 10, hours: 20, milestone: "Junior Olympiad & IOQM Primer Test", faculty: "Prof. Amitava Sen (ISI Kolkata)" },
      { chapter: "Math: Algebraic Expressions & Linear Equations", subject: "Mathematics", days: 12, hours: 24, milestone: "Word Problems & Mental Arithmetic Test", faculty: "Prof. Amitava Sen (ISI Kolkata)" },
      { chapter: "Math: Geometry Axioms, Triangles & Mensuration", subject: "Mathematics", days: 14, hours: 28, milestone: "Area & Perimeter Real-world Challenges", faculty: "Prof. Amitava Sen (ISI Kolkata)" }
    ]
  }
];

export const TOP_ACHIEVERS = [
  {
    id: "ach-1",
    name: "Sourav Gangopadhyay",
    category: "JEE Advanced",
    rank: "AIR 42",
    exam: "JEE Advanced 2025",
    college: "IIT Bombay — Computer Science & Eng.",
    score: "318 / 360",
    quote: "HLA's physics problem sets and 1-on-1 doubt sessions at Haldia Central Campus completely transformed how I approached multi-concept JEE Advanced problems.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    badgeColor: "bg-orange text-white"
  },
  {
    id: "ach-2",
    name: "Ananya Mukherjee",
    category: "NEET / Olympiad",
    rank: "AIR 118 (695/720)",
    exam: "NEET-UG 2025",
    college: "AIIMS / Top Government Medical College",
    score: "695 / 720",
    quote: "NCERT line-by-line biology drills and weekly full-length OMR mock tests removed all exam anxiety before the actual NEET exam.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    badgeColor: "bg-teal text-white"
  },
  {
    id: "ach-3",
    name: "Rohan Das",
    category: "JEE Main",
    rank: "99.94 Percentile",
    exam: "JEE Main 2025",
    college: "IIT Kharagpur — Electronics & ECE",
    score: "282 / 300 (Math: 100/100)",
    quote: "The speed-building CBT test platform in Haldia gave me the exact exam temperament needed to score a 100 percentile in Mathematics.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    badgeColor: "bg-electric text-white"
  },
  {
    id: "ach-4",
    name: "Priyanshu Pal",
    category: "JEE Advanced",
    rank: "AIR 215",
    exam: "JEE Advanced 2025",
    college: "IIT Delhi — Electrical Engineering",
    score: "294 / 360",
    quote: "Teachers stay back till 8 PM every evening in the doubt cabins until your last doubt is thoroughly resolved. That culture is unmatched.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    badgeColor: "bg-orange text-white"
  },
  {
    id: "ach-5",
    name: "Sneha Roy",
    category: "JEE Main",
    rank: "99.82 Percentile",
    exam: "JEE Main 2025",
    college: "NIT — Computer Science",
    score: "274 / 300",
    quote: "The personalized mentorship and test analytics pinpointed exactly where I was losing marks in organic chemistry. Results followed effortlessly.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    badgeColor: "bg-electric text-white"
  },
  {
    id: "ach-6",
    name: "Arpan Mondal",
    category: "NEET / Olympiad",
    rank: "AIR 410 (682/720)",
    exam: "NEET-UG 2025 & KVPY Fellow",
    college: "Premier Medical College / IISc Bangalore Offer",
    score: "682 / 720",
    quote: "From foundation classes in Class 9 to cracking NEET and KVPY, HLA educators at Haldia treated my goal like their personal mission.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400",
    badgeColor: "bg-teal text-white"
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Ex-IITian & Subject Master Explanations",
    desc: "Complex topics in rotational dynamics, electromagnetism, and organic synthesis are broken down with intuitive physical models and animations."
  },
  {
    title: "Scientifically Structured Study Schedules",
    desc: "A balanced 24-month roadmap with zero backlogs, pre-scheduled revision breaks, and stress-free school board synchronization."
  },
  {
    title: "Daily Practice Problem (DPP) Architecture",
    desc: "Every lecture is coupled with 15 hand-picked, graded problems. Graded feedback prevents conceptual gaps from snowballing."
  },
  {
    title: "Dedicated 1-on-1 Faculty Doubt Desks",
    desc: "Permanent faculty presence from 10:00 AM to 7:30 PM. No waiting in crowds; sit face-to-face with your teacher until clarity is achieved."
  },
  {
    title: "AI-Powered Test Analytics & Error Registers",
    desc: "Students maintain a physical & digital error log. Our analytics pinpoint accuracy traps, time wasted per question, and conceptual weaknesses."
  }
];

export const FACULTY_MEMBERS = [
  {
    id: "fac-1",
    name: "Dr. Rajesh Verma",
    role: "Senior Physics Faculty & Academic Director",
    credentials: "B.Tech & Ph.D., IIT Kharagpur | 14+ Years Experience",
    bio: "Former Senior Physics Mentor at leading national institutes. Known for making mechanics and electrodynamics effortless through visual derivations and fundamental principles. Mentored 40+ students into Top 500 JEE Advanced ranks.",
    subjects: ["Rotational Mechanics", "Electromagnetism", "Modern Physics"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: "fac-2",
    name: "Neha Agarwal",
    role: "Lead Chemistry Mentor & HOD Chemistry",
    credentials: "M.Sc. Chemistry, University of Calcutta (Gold Medalist) | 11+ Years Experience",
    bio: "Master of Organic Reaction Mechanisms and Physical Chemistry thermodynamics. Authored popular entrance problem workbooks and recognized for turning students' chemistry scores from average to 95%+ in boards and JEE.",
    subjects: ["Reaction Mechanisms", "Chemical Kinetics", "Coordination Chemistry"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    color: "from-teal-600 to-emerald-700"
  },
  {
    id: "fac-3",
    name: "Prof. Amitava Sen",
    role: "Head of Mathematics & Olympiad Coach",
    credentials: "M.Stat, Indian Statistical Institute (ISI) Kolkata | 16+ Years Experience",
    bio: "Renowned mentor for JEE Advanced calculus, coordinate geometry, and permutation-combinations. Trains students to break high-weightage multi-step problems in under 3 minutes with crystalline geometrical intuition and algebraic elegance.",
    subjects: ["Integral & Differential Calculus", "Coordinate Geometry", "Combinatorics"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    color: "from-orange-500 to-amber-600"
  }
];

export const RESULTS_MILESTONES = [
  {
    id: "improvement",
    category: "Academic Improvement",
    headline: "Systematic Score Acceleration",
    description: "From 60% in school assessments to 95%+ in Board Examinations and crossing national cutoffs with solid conceptual grounding.",
    statLabel: "+38% Average Score Lift",
    statSubtext: "Measured between entry diagnostic and 6-month review",
    badge: "Quantified Growth",
    accent: "electric"
  },
  {
    id: "practice",
    category: "Consistent Practice",
    headline: "Rigorous 10,000+ Question Bank",
    description: "Graded practice modules from fundamental boards level to national olympiad and advanced JEE single/multi-choice problems.",
    statLabel: "100% DPP Completion Rate",
    statSubtext: "Weekly monitored homework submission protocol",
    badge: "Habit Excellence",
    accent: "teal"
  },
  {
    id: "confidence",
    category: "Student Confidence",
    headline: "Zero-Panic Exam Temperament",
    description: "Timed Computer-Based Tests simulate real examination pressure, conditioning students to manage adrenaline and avoid negative marks.",
    statLabel: "Top Exam Temperament",
    statSubtext: "94% of our students report complete exam calm",
    badge: "Psychological Edge",
    accent: "orange"
  },
  {
    id: "milestones",
    category: "Curriculum Milestones",
    headline: "Triple Revision Cycle Protocol",
    description: "Syllabus completes 4 months prior to final exams, allowing three full cycles of chapter-wise revision and grand mock drills.",
    statLabel: "100% On-Time Completion",
    statSubtext: "Strict adherence to the published academic calendar",
    badge: "Punctual Delivery",
    accent: "navy"
  }
];

export const FAQS = [
  {
    q: "Where is the HALDIA LEARNING ACADEMY campus located in Haldia?",
    a: "Our central campus is located at City Centre Complex, Sector 1, Haldia, West Bengal - 721657 (near City Super Market and Haldia Bus Terminus). The campus features modern air-conditioned smart classrooms, an advanced CBT computer lab, and full-time faculty doubt cabins."
  },
  {
    q: "What is the maximum batch size at HALDIA LEARNING ACADEMY?",
    a: "We maintain a strict ceiling of 30 to 35 students per batch. This allows our master educators to know every student by name, monitor their test rankings personally, and conduct 1-on-1 doubt sessions without haste."
  },
  {
    q: "How does the Daily Doubt Resolution system work?",
    a: "Our full-time faculty members are present in dedicated academic cabins from 10:00 AM to 7:30 PM. Students can walk into doubt cabins before or after classes, get their DPP questions resolved step-by-step, or submit questions digitally via our student portal."
  },
  {
    q: "Are study materials and mock test series included in the course fee?",
    a: "Yes. All students receive comprehensive printed theory books, chapter-wise Daily Practice Problem (DPP) booklets, formula compendiums, and full access to our All-India Computer-Based Test (CBT) Series with AI-driven performance reports."
  },
  {
    q: "Can students join mid-session or after school exams?",
    a: "Yes. We offer special bridge batches and recorded concept modules to cover backlogs so students transitioning from school tests integrate seamlessly into our running syllabus."
  },
  {
    q: "What are the scholarship criteria for merit students in Haldia?",
    a: "We conduct the HLA Talent Search & Scholarship Exam (HLA-TSE). Eligible students can receive up to 100% tuition scholarships based on performance in our diagnostic assessment or their previous board percentages."
  }
];
