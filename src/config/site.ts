/**
 * Central site configuration.
 * Edit this file to update personal details, experience, projects, and links.
 */

export const siteConfig = {
  name: 'Balaj Khan',
  shortName: 'BK',
  title: 'Senior Full Stack Engineer',
  subtitle: 'Full Stack · APIs · Product UI · AI-assisted Engineering',
  location: 'Rawalpindi, Pakistan',
  email: 'balajkhan07@gmail.com',
  tagline:
    'I design and build end-to-end web products — from APIs and databases to polished React interfaces — and apply prompt engineering to ship faster with modern AI tools.',
  summary:
    'Specializing in Node.js, React, TypeScript, REST & GraphQL APIs, MongoDB, PostgreSQL, system integrations, and AI-assisted development.',

  social: {
    github: 'https://github.com/balajkhan07',
    linkedin: 'https://www.linkedin.com/in/balaj-khan',
  },

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ] as const,
} as const

export const aboutContent = {
  paragraphs: [
    'I am a Senior Full Stack Engineer with multiple years of professional experience building production web applications end to end. My work spans reliable APIs, data models, integrations, and the interfaces users actually work in — keeping products coherent from database to UI.',
    'I have shipped software in logistics, insurance, and enterprise environments — GraphQL and PostgreSQL services, Node.js APIs, MongoDB data models, Python automation, and modern frontends with React, Angular, and Vue. I also work with CRM platforms such as Zoho CRM and Salesforce when product workflows require it.',
    'Alongside core engineering, I actively use prompt engineering and AI tooling to accelerate delivery — drafting designs, refining implementations, debugging faster, and improving documentation — while still owning architecture decisions, code quality, and production reliability across the full stack.',
  ],
  focusAreas: [
    'Full-stack web applications',
    'React / Angular / Vue interfaces',
    'API design (REST & GraphQL)',
    'Databases & data modeling',
    'Third-party integrations',
    'Prompt engineering & AI tooling',
  ],
}

export const highlights = [
  {
    title: 'Full Stack Development',
    description: 'Shipping features across the stack — Node.js and Python services paired with React, Angular, and Vue UIs.',
    icon: 'server' as const,
  },
  {
    title: 'Product Interfaces',
    description: 'User-facing experiences with React, Angular, and Vue — clear flows, solid state management, and maintainable UI code.',
    icon: 'layout' as const,
  },
  {
    title: 'APIs & Data',
    description: 'REST, GraphQL, MongoDB, PostgreSQL, Prisma, and practical query optimization for production workloads.',
    icon: 'database' as const,
  },
  {
    title: 'AI & Prompt Engineering',
    description: 'Using LLMs and structured prompting to speed up design, coding, debugging, and documentation.',
    icon: 'sparkles' as const,
  },
]

export const skillCategories = [
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'TypeScript', 'JavaScript', 'Python', 'FastAPI', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Prisma', 'Mongoose', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'Vue.js', 'Redux', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'AI & Prompt Engineering',
    skills: [
      'Prompt Engineering',
      'LLM Workflows',
      'AI-assisted Development',
      'Context Engineering',
      'AI Tooling (Cursor / Copilot)',
    ],
  },
  {
    title: 'Infrastructure',
    skills: ['Docker', 'Firebase', 'AWS', 'Amazon S3', 'GitHub Actions', 'CI/CD'],
  },
  {
    title: 'Engineering & Integrations',
    skills: [
      'System Design',
      'API Architecture',
      'Performance Optimization',
      'Authentication',
      'Background Jobs',
      'Zoho CRM',
      'Salesforce',
      'Playwright',
    ],
  },
]

export const alsoFamiliar = ['Git', 'GitHub', 'RxJS', 'Selenium', 'Agile']

export type ExperienceItem = {
  id: string
  company: string
  role: string
  location?: string
  startDate: string
  endDate: string
  description: string
  technologies: string[]
  achievements: string[]
  isPlaceholder?: boolean
}

export const experience: ExperienceItem[] = [
  {
    id: 'exp-hightech',
    company: 'Hightech Insurance',
    role: 'Senior Software Engineer',
    location: 'Remote',
    startDate: 'Sep 2024',
    endDate: 'Present',
    description:
      'Building full-stack insurance product features — Node.js and Python (FastAPI) services, PostgreSQL and MongoDB data stores, and React/Angular interfaces for business and consumer workflows.',
    technologies: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'React', 'Angular'],
    achievements: [
      'Architecting and implementing robust services with Node.js, Python (FastAPI), PostgreSQL, and MongoDB',
      'Designing and developing user-facing interfaces with React and Angular',
      'Building maintainable APIs and data flows that support insurance product workflows',
    ],
  },
  {
    id: 'exp-luckytruck',
    company: 'Luckytruck LLC',
    role: 'Full Stack Developer',
    location: 'Remote',
    startDate: 'Dec 2021',
    endDate: 'Jul 2024',
    description:
      'Built and maintained full-stack features for a logistics and insurance-adjacent platform — React UI, GraphQL APIs, data layers, automation, and Firebase-powered product capabilities.',
    technologies: ['Node.js', 'GraphQL', 'PostgreSQL', 'Prisma', 'Python', 'Firebase', 'React'],
    achievements: [
      'Built an automated application filler that submits user data across web apps to obtain insurance quotes using Python',
      'Developed full-stack features with Node.js, GraphQL, PostgreSQL, Prisma, and React',
      'Integrated Firebase for push notifications, storage, and related product services',
    ],
  },
  {
    id: 'exp-lmkr',
    company: 'LMKR',
    role: 'Application Engineer',
    location: 'Islamabad, Pakistan',
    startDate: 'Jul 2018',
    endDate: 'Dec 2021',
    description:
      'Contributed across the software delivery lifecycle in an Agile environment — from security-focused code analysis to data visualization for complex datasets.',
    technologies: ['JavaScript', 'Agile', 'Apache ECharts', 'Security Scanning'],
    achievements: [
      'Analyzed source code for security vulnerabilities using Fortify / X-Ray scanning',
      'Worked across project phases using Agile methodologies',
      'Visualized complex datasets using Apache ECharts',
    ],
  },
]

export type EducationItem = {
  id: string
  school: string
  degree: string
  location: string
  startDate: string
  endDate: string
  highlights?: string[]
}

export const education: EducationItem[] = [
  {
    id: 'edu-furrc',
    school: 'Foundation University Rawalpindi Campus',
    degree: 'Bachelor of Computer in Software Engineering',
    location: 'Rawalpindi, Pakistan',
    startDate: 'Sep 2014',
    endDate: 'Sep 2018',
    highlights: [
      'Introduction to Programming',
      'Data Structures and Algorithms',
      'Analysis of Algorithms',
    ],
  },
]

export type ProjectItem = {
  id: string
  name: string
  category: string
  description: string
  technologies: string[]
  challenges: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  isExample?: boolean
}

export const projects: ProjectItem[] = [
  {
    id: 'proj-luckytruck',
    name: 'LuckyTruck',
    category: 'Full Stack · Logistics',
    description:
      'Full-stack product work on LuckyTruck — React UI, Node.js and GraphQL services, PostgreSQL data layers, and Python automation for insurance-quote workflows.',
    technologies: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Python', 'Selenium', 'Firebase'],
    challenges: [
      'Automating multi-step quote submissions across external web applications',
      'Keeping GraphQL APIs, PostgreSQL models, and React UI aligned with evolving product flows',
      'Integrating Firebase notifications and storage into day-to-day product features',
    ],
    liveUrl: 'https://luckytruck.com',
  }
]

export const whatIBuild = [
  {
    title: 'Web Applications',
    description: 'End-to-end product features spanning services, data, and user-facing interfaces.',
    icon: 'server' as const,
  },
  {
    title: 'Frontend Interfaces',
    description: 'React, Angular, and Vue UIs built for clarity, maintainability, and real product workflows.',
    icon: 'layout' as const,
  },
  {
    title: 'APIs',
    description: 'REST and GraphQL APIs designed for maintainability, clarity, and performance.',
    icon: 'api' as const,
  },
  {
    title: 'Databases',
    description: 'MongoDB and PostgreSQL modeling, Prisma/Mongoose, queries, and targeted optimization.',
    icon: 'database' as const,
  },
  {
    title: 'Integrations',
    description: 'Third-party APIs, CRM systems, automation flows, and external platforms wired defensively.',
    icon: 'plug' as const,
  },
  {
    title: 'AI-assisted Engineering',
    description: 'Prompt engineering and LLM workflows that accelerate delivery without sacrificing ownership.',
    icon: 'sparkles' as const,
  },
]

export const philosophy = [
  {
    title: 'Understandable systems',
    text: 'Prefer clear structure over clever abstractions. Code should be readable months later.',
  },
  {
    title: 'Measure before optimizing',
    text: 'Optimize against real bottlenecks — APIs, queries, and architecture — not assumptions.',
  },
  {
    title: 'Maintainable APIs',
    text: 'Design contracts that stay stable, predictable, and easy for consumers to reason about.',
  },
  {
    title: 'AI as leverage, not a crutch',
    text: 'Use prompt engineering to move faster — then verify, refine, and own every production decision.',
  },
  {
    title: 'Reliability first',
    text: 'Build with failure modes, observability, and operational reality in mind.',
  },
  {
    title: 'Defensive integrations',
    text: 'External systems fail. Timeouts, retries, and clear error paths are part of the design.',
  },
]
