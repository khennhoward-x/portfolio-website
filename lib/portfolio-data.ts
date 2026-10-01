export const profile = {
  name: 'Khenn Howard Canete',
  firstName: 'Khenn',
  initials: 'KC',
  title: 'English Educator',
  roles: ['English Educator', 'Literature Enthusiast', 'Lifelong Learner', 'Storyteller'],
  origin: 'Philippines',
  location: 'Jacksonville, Florida',
  email: 'hello@khenncanete.com',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
  ],
  intro:
    'I help learners find their voice through language and literature — building classrooms where reading feels personal and writing feels possible.',
  about: [
    "I'm Khenn, an English educator who grew up in the Philippines, where I first fell in love with stories told in many languages. That love led me to earn a Bachelor of Secondary Education, Major in English.",
    "Today I live in Jacksonville, Florida. Moving across the world taught me firsthand what it means to learn in a new place — and it shapes how I teach: with patience, curiosity, and respect for every learner's background.",
  ],
  skills: [
    'Lesson Planning',
    'Curriculum Design',
    'ESL / ELL Instruction',
    'Literature & Composition',
    'Classroom Management',
    'Assessment Design',
    'Public Speaking',
    'Bilingual: English & Filipino',
  ],
  stats: [
    { value: '2', label: 'Countries called home' },
    { value: '4', label: 'Featured projects' },
    { value: '100+', label: 'Learners taught' },
  ],
}

export type Project = {
  slug: string
  title: string
  category: 'Curriculum' | 'Language Learning' | 'Community' | 'Writing'
  year: string
  image: string
  summary: string
  details: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: 'literature-unit',
    title: 'Voices of the Archipelago',
    category: 'Curriculum',
    year: '2023',
    image: '/projects/literature-unit.png',
    summary: 'A literature unit pairing Philippine authors with world classics.',
    details:
      'A four-week secondary literature unit that places Philippine writers alongside canonical world literature, helping students compare themes of identity, family, and home across cultures.',
    highlights: [
      'Designed 12 standards-aligned lesson plans',
      'Built rubrics for comparative essays',
      'Integrated discussion circles and reflective journaling',
    ],
  },
  {
    slug: 'esl-toolkit',
    title: 'Everyday English Toolkit',
    category: 'Language Learning',
    year: '2024',
    image: '/projects/esl-toolkit.png',
    summary: 'Practical vocabulary and conversation resources for new English learners.',
    details:
      'A collection of printable and digital materials for adult and teen English learners — focused on real-life situations like shopping, appointments, and job interviews.',
    highlights: [
      'Created 40+ themed vocabulary card sets',
      'Role-play scripts for real-world conversations',
      'Self-assessment checklists for learners',
    ],
  },
  {
    slug: 'student-journal',
    title: 'Ink & Island: Student Anthology',
    category: 'Writing',
    year: '2022',
    image: '/projects/student-journal.png',
    summary: 'A student-written anthology of poems, essays, and short fiction.',
    details:
      'Guided a group of secondary students through drafting, peer review, and editing to publish a printed anthology of their creative writing.',
    highlights: [
      'Led weekly writing workshops',
      'Coached students through peer editing',
      'Organized a launch reading for families',
    ],
  },
  {
    slug: 'reading-program',
    title: 'Read-Along Corner',
    category: 'Community',
    year: '2023',
    image: '/projects/reading-program.png',
    summary: 'A volunteer reading program for young readers in the community.',
    details:
      'A weekend reading initiative that paired volunteers with young readers to build fluency, comprehension, and a lasting love of books.',
    highlights: [
      'Recruited and trained volunteer readers',
      'Curated a leveled book collection',
      'Tracked reading growth over the program',
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
    role: 'English Tutor',
    organization: 'Independent / Online',
    location: 'Jacksonville, FL',
    period: '2024 — Present',
    description:
      'Providing one-on-one and small-group English instruction for students and adult learners.',
    achievements: [
      'Personalized learning plans for each student',
      'Focus on reading comprehension, grammar, and confident speaking',
      'Flexible online and in-person sessions',
    ],
  },
  {
    role: 'Secondary English Teacher',
    organization: 'Secondary School',
    location: 'Philippines',
    period: '2022 — 2024',
    description:
      'Taught English language and literature to junior and senior high school students.',
    achievements: [
      'Planned and delivered daily lessons aligned with the K–12 curriculum',
      'Advised the school publication and writing club',
      'Introduced project-based assessments and reading circles',
    ],
  },
  {
    role: 'Pre-Service (Practice) Teacher',
    organization: 'Partner Cooperating School',
    location: 'Philippines',
    period: '2021 — 2022',
    description:
      'Completed supervised teaching internship as part of the Bachelor of Secondary Education program.',
    achievements: [
      'Handled classes under a cooperating teacher',
      'Prepared detailed lesson plans and instructional materials',
      'Received strong evaluations for classroom delivery',
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
    school: 'University in the Philippines',
    location: 'Philippines',
    period: 'Graduated',
    notes: [
      'Coursework in linguistics, literature, and language pedagogy',
      'Teaching internship in secondary English classrooms',
      'Training in assessment, curriculum development, and educational technology',
    ],
  },
]
