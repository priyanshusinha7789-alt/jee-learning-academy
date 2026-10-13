// Verified Class Timetable & Academic Schedule Dataset for HALDIA LEARNING ACADEMY
// Single Source of Truth for on-screen display and PDF generation

export const TIMETABLE_METADATA = {
  lastUpdated: "Academic Session 2026–27 (Effective Nov 2026)",
  campus: "Haldia Central Campus, City Centre Complex, Sector 1, Haldia",
  contact: "+91 98321 45670 / +91 98321 45671",
  email: "admissions@haldialearningacademy.com"
};

export const TIMETABLE_BATCHES = [
  { id: "all", label: "All Batches" },
  { id: "jee-ranker", label: "JEE Elite Pinnacle (11 & 12)" },
  { id: "higher-secondary", label: "Higher Secondary (Class 11-12 Board+JEE)" },
  { id: "secondary", label: "Secondary (Class 9-10 Pre-JEE)" },
  { id: "foundation", label: "Junior Foundation (Class 6-8)" }
];

export const TIMETABLE_ENTRIES = [
  // Monday
  {
    id: "tt-1",
    day: "Monday",
    startTime: "04:30 PM",
    endTime: "06:00 PM",
    batchId: "jee-ranker",
    batchName: "JEE Elite Pinnacle",
    subject: "Physics",
    topic: "Rotational Mechanics: Angular Momentum & Conservation",
    teacher: "Dr. Rajesh Verma (Ex-IIT Kharagpur)",
    room: "Lecture Hall A-101 (Smart CBT Hall)",
    notes: "DPP Set 4 mandatory submission"
  },
  {
    id: "tt-2",
    day: "Monday",
    startTime: "06:15 PM",
    endTime: "07:45 PM",
    batchId: "jee-ranker",
    batchName: "JEE Elite Pinnacle",
    subject: "Chemistry",
    topic: "Thermodynamics & Thermochemistry: Gibbs Free Energy",
    teacher: "Neha Agarwal (Gold Medalist)",
    room: "Lecture Hall A-101 (Smart CBT Hall)",
    notes: "Numerical practice session"
  },
  {
    id: "tt-3",
    day: "Monday",
    startTime: "04:30 PM",
    endTime: "06:00 PM",
    batchId: "secondary",
    batchName: "Secondary (Class 9-10)",
    subject: "Mathematics",
    topic: "Quadratic Equations: Nature of Roots & Word Problems",
    teacher: "Prof. Amitava Sen (ISI Kolkata)",
    room: "Lecture Hall B-201",
    notes: "NCERT & Board Exemplar sync"
  },
  {
    id: "tt-4",
    day: "Monday",
    startTime: "06:15 PM",
    endTime: "07:30 PM",
    batchId: "secondary",
    batchName: "Secondary (Class 9-10)",
    subject: "Physics",
    topic: "Current Electricity: Series & Parallel Combinations",
    teacher: "Dr. Rajesh Verma (Ex-IIT Kharagpur)",
    room: "Lecture Hall B-201",
    notes: "Circuit simulation analysis"
  },

  // Tuesday
  {
    id: "tt-5",
    day: "Tuesday",
    startTime: "04:30 PM",
    endTime: "06:00 PM",
    batchId: "jee-ranker",
    batchName: "JEE Elite Pinnacle",
    subject: "Mathematics",
    topic: "Differential Calculus: Maxima & Minima Optimization",
    teacher: "Prof. Amitava Sen (ISI Kolkata)",
    room: "Lecture Hall A-101",
    notes: "Multi-concept problem set"
  },
  {
    id: "tt-6",
    day: "Tuesday",
    startTime: "06:15 PM",
    endTime: "07:45 PM",
    batchId: "jee-ranker",
    batchName: "JEE Elite Pinnacle",
    subject: "Physics",
    topic: "Rotational Dynamics: Rolling with and without Slipping",
    teacher: "Dr. Rajesh Verma (Ex-IIT Kharagpur)",
    room: "Lecture Hall A-101",
    notes: "Friction vector analysis"
  },
  {
    id: "tt-7",
    day: "Tuesday",
    startTime: "04:00 PM",
    endTime: "05:15 PM",
    batchId: "foundation",
    batchName: "Junior Foundation (Class 6-8)",
    subject: "Mental Ability",
    topic: "Logical Reasoning: Number Patterns & Coding-Decoding",
    teacher: "Prof. Amitava Sen (ISI Kolkata)",
    room: "Junior Wing C-102",
    notes: "Olympiad speed drill"
  },
  {
    id: "tt-8",
    day: "Tuesday",
    startTime: "05:30 PM",
    endTime: "06:45 PM",
    batchId: "foundation",
    batchName: "Junior Foundation (Class 6-8)",
    subject: "Science",
    topic: "Physics Demonstration: Optics & Light Paths",
    teacher: "Dr. Rajesh Verma (Ex-IIT Kharagpur)",
    room: "Junior Wing C-102",
    notes: "Hands-on prism demonstration"
  },

  // Wednesday
  {
    id: "tt-9",
    day: "Wednesday",
    startTime: "04:30 PM",
    endTime: "06:00 PM",
    batchId: "higher-secondary",
    batchName: "Higher Secondary (11-12)",
    subject: "Chemistry",
    topic: "General Organic Chemistry: Electrophiles & Nucleophiles",
    teacher: "Neha Agarwal (Gold Medalist)",
    room: "Lecture Hall B-202",
    notes: "Reaction mechanism flowchart"
  },
  {
    id: "tt-10",
    day: "Wednesday",
    startTime: "06:15 PM",
    endTime: "07:45 PM",
    batchId: "higher-secondary",
    batchName: "Higher Secondary (11-12)",
    subject: "Mathematics",
    topic: "Definite Integration & Properties of Definite Integrals",
    teacher: "Prof. Amitava Sen (ISI Kolkata)",
    room: "Lecture Hall B-202",
    notes: "High-yield JEE Main pyqs"
  },
  {
    id: "tt-11",
    day: "Wednesday",
    startTime: "04:30 PM",
    endTime: "06:00 PM",
    batchId: "secondary",
    batchName: "Secondary (Class 9-10)",
    subject: "Chemistry",
    topic: "Acids, Bases & Salts: pH Indicator Analysis",
    teacher: "Neha Agarwal (Gold Medalist)",
    room: "Lecture Hall B-201",
    notes: "Chemical balancing workshop"
  },

  // Thursday
  {
    id: "tt-12",
    day: "Thursday",
    startTime: "04:30 PM",
    endTime: "06:00 PM",
    batchId: "jee-ranker",
    batchName: "JEE Elite Pinnacle",
    subject: "Chemistry",
    topic: "Chemical & Ionic Equilibrium: Buffer Systems",
    teacher: "Neha Agarwal (Gold Medalist)",
    room: "Lecture Hall A-101",
    notes: "Solubility product numericals"
  },
  {
    id: "tt-13",
    day: "Thursday",
    startTime: "06:15 PM",
    endTime: "07:45 PM",
    batchId: "jee-ranker",
    batchName: "JEE Elite Pinnacle",
    subject: "Mathematics",
    topic: "Coordinate Geometry: Tangents & Normals to Parabola",
    teacher: "Prof. Amitava Sen (ISI Kolkata)",
    room: "Lecture Hall A-101",
    notes: "JEE Advanced integer questions"
  },
  {
    id: "tt-14",
    day: "Thursday",
    startTime: "04:00 PM",
    endTime: "05:15 PM",
    batchId: "foundation",
    batchName: "Junior Foundation (Class 6-8)",
    subject: "Mathematics",
    topic: "Number Theory & Prime Factorization Techniques",
    teacher: "Prof. Amitava Sen (ISI Kolkata)",
    room: "Junior Wing C-102",
    notes: "Mental math workbook"
  },

  // Friday
  {
    id: "tt-15",
    day: "Friday",
    startTime: "04:30 PM",
    endTime: "06:00 PM",
    batchId: "jee-ranker",
    batchName: "JEE Elite Pinnacle",
    subject: "Physics",
    topic: "Electrostatics: Gauss's Law Applications & Field Symmetry",
    teacher: "Dr. Rajesh Verma (Ex-IIT Kharagpur)",
    room: "Lecture Hall A-101",
    notes: "Flux integration exercises"
  },
  {
    id: "tt-16",
    day: "Friday",
    startTime: "06:15 PM",
    endTime: "07:45 PM",
    batchId: "higher-secondary",
    batchName: "Higher Secondary (11-12)",
    subject: "Physics",
    topic: "Current Electricity: Kirchhoff's Mesh Laws & Potentiometer",
    teacher: "Dr. Rajesh Verma (Ex-IIT Kharagpur)",
    room: "Lecture Hall B-202",
    notes: "Board derivation practice"
  },
  {
    id: "tt-17",
    day: "Friday",
    startTime: "04:30 PM",
    endTime: "06:00 PM",
    batchId: "secondary",
    batchName: "Secondary (Class 9-10)",
    subject: "Mathematics",
    topic: "Trigonometric Identities & Standard Angles",
    teacher: "Prof. Amitava Sen (ISI Kolkata)",
    room: "Lecture Hall B-201",
    notes: "Board proofs drill"
  },

  // Saturday
  {
    id: "tt-18",
    day: "Saturday",
    startTime: "09:00 AM",
    endTime: "11:30 AM",
    batchId: "jee-ranker",
    batchName: "JEE Elite Pinnacle",
    subject: "PCM Combined",
    topic: "Advanced Problem-Solving Clinic (Rankers Module)",
    teacher: "All Faculty Leads",
    room: "Smart CBT Hall A-101",
    notes: "Timed 15-minute challenge modules"
  },
  {
    id: "tt-19",
    day: "Saturday",
    startTime: "12:00 PM",
    endTime: "02:00 PM",
    batchId: "higher-secondary",
    batchName: "Higher Secondary (11-12)",
    subject: "Chemistry & Math",
    topic: "Comprehensive Revision & Backlog Resolution",
    teacher: "Neha Agarwal & Prof. Sen",
    room: "Lecture Hall B-202",
    notes: "Weekly doubts & homework clinic"
  },
  {
    id: "tt-20",
    day: "Saturday",
    startTime: "02:30 PM",
    endTime: "05:00 PM",
    batchId: "foundation",
    batchName: "Junior Foundation (Class 6-8)",
    subject: "Science & Aptitude",
    topic: "Olympiad Assessment & Visual Experiment Workshop",
    teacher: "Senior Foundation Faculty",
    room: "Junior Wing C-102",
    notes: "Interactive quiz session"
  },

  // Sunday
  {
    id: "tt-21",
    day: "Sunday",
    startTime: "09:00 AM",
    endTime: "12:00 PM",
    batchId: "jee-ranker",
    batchName: "JEE Elite Pinnacle",
    subject: "NTA Pattern CBT",
    topic: "Bi-Weekly Computer-Based Test (Physics + Chem + Math)",
    teacher: "CBT Examination Cell",
    room: "CBT Computer Terminal Lab (35 Terminals)",
    notes: "Full NTA screen simulation with instant analytics"
  },
  {
    id: "tt-22",
    day: "Sunday",
    startTime: "09:00 AM",
    endTime: "11:30 AM",
    batchId: "secondary",
    batchName: "Secondary (Class 9-10)",
    subject: "Board & NTSE Pattern",
    topic: "Weekly Unit Assessment & OMR Speed Test",
    teacher: "Secondary Examination Cell",
    room: "Exam Hall B",
    notes: "Same-day result & error log"
  },
  {
    id: "tt-23",
    day: "Sunday",
    startTime: "12:30 PM",
    endTime: "02:30 PM",
    batchId: "all",
    batchName: "All Enrolled Students",
    subject: "Doubt Resolution",
    topic: "1-on-1 Academic Cabin Doubt Clarification",
    teacher: "Permanent Faculty on Duty",
    room: "Faculty Academic Cabins 1–4",
    notes: "Walk-in 1:1 problem resolution"
  }
];
