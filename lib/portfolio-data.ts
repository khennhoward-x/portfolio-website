export const profile = {
  name: 'Khenn Howard Canete',
  firstName: 'Khenn',
  initials: 'KC',
  title: 'Licensed Professional Teacher',
  roles: [
    'Licensed Professional Teacher',
    'Administrative Specialist',
    'Data Entry Professional',
    'Shift Manager',
  ],
  origin: 'Philippines',
  location: 'Jacksonville, FL',
  email: 'khenn.howard@gmail.com',
  phone: '904-208-8683',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khenn-howard-canete-a97741272' },
    { label: 'Facebook', href: 'https://www.facebook.com/aint.knn/' },
    { label: 'Instagram', href: 'https://www.instagram.com/aint.knn' },
  ],
  intro:
    'A detail-oriented professional with experience in data entry, administrative support, customer service, and Microsoft Office, backed by strong organization and communication skills.',
  about: [
    "I'm Khenn, a Licensed Professional Teacher from the Philippines with a Bachelor of Secondary Education, Major in English, from Assumption College of Nabunturan. My first role there as a Teaching Assistant taught me how much good teaching depends on accurate records, clear documents, and well-run operations.",
    "Since then I've managed a pet salon, supported digital operations for a Canadian client, studied Japanese to the JLPT N4 level, and now work as a Shift Manager at Rowe's IGA in Jacksonville, Florida. Across every role, I bring the same things: accuracy, clear communication, and the ability to work independently.",
  ],
  skills: [
    'Data Entry & Data Management',
    'Administrative Support',
    'Document & Records Management',
    'AI-Assisted Tools',
    'Microsoft Office / Microsoft 365',
    'Written & Verbal Communication',
    'Data Accuracy & Quality Control',
    'Basic HTML & CSS',
  ],
  stats: [
    { value: '4', label: 'Professional roles' },
    { value: '3', label: 'Countries worked with' },
    { value: 'N4', label: 'Japanese (JLPT)' },
  ],
}

export type Project = {
  slug: string
  title: string
  category: 'Curriculum' | 'Language Learning' | 'Community' | 'Writing' | 'Productivity'
  year: string
  image: string
  summary: string
  details: string
  highlights: string[]
  link?: { label: string; href: string }
}

export const projects: Project[] = [
  {
    slug: 'job-search-command-center',
    title: 'Job Search Command Center',
    category: 'Productivity',
    year: '2026',
    image: '/projects/job-search-command-center.png',
    summary: 'A Notion workspace for tracking applications, follow-ups, and interviews.',
    details:
      'I built a personal command center in Notion to run my job search like a project: every application, contact, deadline, and next step lives in one organized, searchable system.',
    highlights: [
      'Tracks applications by status from applied to offer',
      'Keeps follow-ups, contacts, and interview notes in one place',
      'Uses linked databases and views to stay organized and on schedule',
    ],
    link: {
      label: 'View on Notion',
      href: 'https://polarized-baron-d18.notion.site/Khenn-s-Job-Search-Command-Center-3ec436966f7480b69145ed27cddf2381?pvs=143',
    },
  },
  {
    slug: 'literature-unit',
    title: 'Instructional Materials Library',
    category: 'Curriculum',
    year: '2022',
    image: '/projects/literature-unit.png',
    summary: 'Classroom-ready lesson materials built in Word, Excel, and PowerPoint.',
    details:
      'As a Teaching Assistant at Assumption College of Nabunturan, I prepared instructional materials, handouts, and presentations to support daily classroom operations in English classes.',
    highlights: [
      'Designed slide decks and handouts with Microsoft Office',
      'Organized materials so teachers could find and reuse them quickly',
      'Supported lessons with clear, consistent formatting',
    ],
  },
  {
    slug: 'student-journal',
    title: 'Student Records & Grade Tracking',
    category: 'Writing',
    year: '2022',
    image: '/projects/student-journal.png',
    summary: 'Accurate spreadsheets for student information, grades, and attendance.',
    details:
      'Built and maintained spreadsheets and reports for student information, grades, and attendance, ensuring the data teachers relied on was complete and accurate.',
    highlights: [
      'Managed data entry for student grades and attendance',
      'Developed reports and documents for faculty',
      'Applied quality checks to keep records error-free',
    ],
  },
  {
    slug: 'esl-toolkit',
    title: 'Japanese Language Journey',
    category: 'Language Learning',
    year: '2024',
    image: '/projects/esl-toolkit.png',
    summary: 'Completed JLPT N4 and JFT through Onodera User Run Philippines.',
    details:
      'An 18-month intensive program in Japanese language and culture. Learning a new language as an adult deepened my respect for learners and sharpened my own communication skills.',
    highlights: [
      'Passed JLPT N4 and the JFT-Basic test',
      'Studied reading, writing, listening, and conversation',
      'Built cross-cultural communication skills',
    ],
  },
  {
    slug: 'reading-program',
    title: 'Salon Operations & Records',
    category: 'Community',
    year: '2023',
    image: '/projects/reading-program.png',
    summary: 'Organized appointments, staff coverage, and records at VIP Pet Salon.',
    details:
      'As Manager of VIP Pet Salon, I set up a reliable system for tracking customers, pets, appointments, payments, and inventory so day-to-day operations ran smoothly.',
    highlights: [
      'Coordinated appointments and staff coverage',
      'Maintained customer, payment, and inventory records',
      'Resolved customer concerns with care and clarity',
    ],
  },
]

export type Experience = {
  role: string
  organization: string
  location: string
  period: string
  description: string
  achievements: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Shift Manager',
    organization: "Rowe's IGA",
    location: 'Jacksonville, FL',
    period: '03/2025 — Present',
    description: 'Leading shifts and keeping daily store operations organized, accurate, and on track.',
    achievements: [
      'Organize merchandise and support smooth daily store operations',
      'Work independently with minimal supervision while maintaining productivity and operational accuracy',
      'Handle data entry, receive updates, and maintain accurate inventory records',
    ],
  },
  {
    role: 'Manager',
    organization: 'VIP Pet Salon',
    location: 'Philippines',
    period: '08/2022 — 05/2023',
    description: 'Managed daily operations, staff scheduling, and customer relationships.',
    achievements: [
      'Coordinated appointments, staff coverage, and customer inquiries for daily operations',
      'Maintained customer, pet, appointment, payment, and inventory records',
      'Resolved customer concerns using strong communication, time management, and attention to detail',
    ],
  },
  {
    role: 'Digital Operations Assistant (Part-time)',
    organization: 'Freelance',
    location: 'Canada (Remote)',
    period: '07/2022 — 01/2023',
    description: 'Supported a remote client by setting up and managing multiple online profiles.',
    achievements: [
      'Created and managed multiple online profiles, keeping accounts organized, accurate, and functional',
      'Handled account setup while maintaining consistency across multiple profiles',
      'Tracked profiles and login details and supported smooth operations across multiple accounts',
    ],
  },
  {
    role: 'Teaching Assistant',
    organization: 'Assumption College of Nabunturan',
    location: 'Nabunturan, Davao de Oro, PH',
    period: '02/2022 — 07/2022',
    description: 'Supported faculty with records, reports, and instructional materials.',
    achievements: [
      'Developed reports, documents, and spreadsheets using Microsoft Office Suite',
      'Managed data entry for student information, grades, and attendance with accuracy',
      'Used Word, Excel, and PowerPoint to prepare instructional materials and support classroom operations',
    ],
  },
]

export type Education = {
  degree: string
  major: string
  school: string
  location: string
  period: string
  notes: string[]
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Secondary Education',
    major: 'Major in English',
    school: 'Assumption College of Nabunturan',
    location: 'Davao, Philippines',
    period: '03/2018 — 06/2022',
    notes: [
      'Coursework in linguistics, literature, and language pedagogy',
      'Teaching practice in secondary English classrooms',
      'Earned the Licensed Professional Teacher credential',
    ],
  },
  {
    degree: 'Japanese Language',
    major: 'JLPT N4 & JFT',
    school: 'Onodera User Run Philippines',
    location: 'Davao, Philippines',
    period: '01/2023 — 07/2024',
    notes: [
      'Passed the Japanese-Language Proficiency Test (N4)',
      'Passed the Japan Foundation Test for Basic Japanese (JFT)',
      'Training in Japanese workplace culture and communication',
    ],
  },
]

export const credentials = ['Licensed Professional Teacher', 'Ground-Handling Services Certificate']
