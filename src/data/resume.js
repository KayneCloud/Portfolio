export const education = [
  {
    id: 1,
    date: "2026 - 2029",
    title: "Master of Science: Cloud & Cybersecurity - Epitech Marseille",
    description: [
      "Leads to a ",
      { bold: "Masters"},
      " title or a ",
      { link: "RNCP Level 7", url: "https://www.francecompetences.fr/recherche/rncp/42634/" },
      " title of ",
      { bold: "Information Systems (IS) Architect" },
      ". The programme trains Cloud experts able to deploy, store and manage data on servers in external data centres, while keeping operational costs under control.",
    ],    items: [
      "Server infrastructure tools: operating systems, virtualisation, orchestration, load balancing",
      "Network infrastructure administration",
      "Designing and building Cloud applications and services",
      "Building, monitoring and maintaining private or public Clouds",
      "Budgeting a solution and optimising its costs",
    ],
  },
  {
    id: 2,
    date: "2023",
    title: "Undergraduate in Sports Science - Avignon University",
    description: "Study of the biological sciences of sport and their applications to everyday life and physical education."
  },
]

export const otherExperience = [
  {
    id: 1,
    date: "2025 - 2026",
    title: "Physical education teaching assistant - French National Education",
    items: [
      "Managing groups",
      "Organising lessons",
      "Responding effectively to unexpected situations",
      "Communicating and adapting",
    ],
  },

  {
    id: 2,
    date: "2021 - 2022",
    title: "multi-skilled team member - Subway, Comox (Canada)",
    items: [
      "Customer service",
      "Stock management",
      "Preparing orders",
      "Teamwork",
    ],
  },
]

export const skillCards = [
  {
    id: 3,
    title: "Soft skills",
    items: ["Adaptability", "Teamwork", "Curiosity", "Eagerness to learn", "Critical thinking"],
  },
  {
    id: 4,
    title: "Languages",
    languages: [
      { name: "English", level: "Native", flag: "uk" },
      { name: "French", level: "Native", flag: "fr" },
      { name: "Japanese", level: "Elementary", flag: "jp" },
    ],
  },
]

export const learning = [
  {
    id: 1,
    title: "From static pages to React",
    text: "I started this portfolio in plain HTML and CSS, then rebuilt it with React. I learned to split a page into reusable components and to keep content in data files instead of repeating HTML.",
  },
  {
    id: 2,
    title: "Working with Git",
    text: "I learned to commit regularly, work on a branch, merge it back into main, and fix mistakes like files left out of a commit.",
  },
  {
    id: 3,
    title: "Back-end development in a team",
    text: "On the job board project I was responsible for the Flask API and the MySQL database, which taught me to agree on an API with a teammate working on the front end.",
  },
]

export const certifications = [
  {
    id: 1,
    name: "AWS Cloud Practitioner - Foundational",
    status: "Certified · 08/2026",
    planned: false,
  },
  {
    id: 2,
    name: "AWS Solutions Architect - Associate",
    status: "In progress · 12/2026",
    planned: true,
  },
  {
    id: 3,
    name: "Introduction to Linux (LFS101)",
    status: "In progress · 11/2026",
    planned: true,
    logo: "linux/linux-original.svg",
  },
]

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/"

export const stackGroups = [
  {
    id: 1,
    title: "Cloud & Tools",
    tools: [
      {name: "AWS", icon: DEVICON + "amazonwebservices/amazonwebservices-plain-wordmark.svg"},
      {name: "Git", icon: DEVICON + "git/git-original.svg" },
      { name: "GitHub", icon: DEVICON + "github/github-original.svg", filter: "invert" },
      { name: "PowerShell", icon: DEVICON + "powershell/powershell-original.svg" },
    ],
  },
  {
    id: 2,
    title: "Languages",
    tools: [
      { name: "Python", icon: DEVICON + "python/python-original.svg" },
      { name: "Java", icon: DEVICON + "java/java-original.svg" },
      { name: "JavaScript", icon: DEVICON + "javascript/javascript-original.svg" },
      { name: "PHP", icon: DEVICON + "php/php-original.svg" },
    ],
  },
  {
    id: 3,
    title: "Front-end",
    tools: [
      { name: "HTML", icon: DEVICON + "html5/html5-original.svg" },
      { name: "CSS", icon: DEVICON + "css3/css3-original.svg" },
      { name: "React", icon: DEVICON + "react/react-original.svg" },
    ],
  },
  {
    id: 4,
    title: "Back-end & Data",
    tools: [
      { name: "Flask", icon: DEVICON + "flask/flask-original.svg", filter: "invert" },
      { name: "MySQL", icon: DEVICON + "mysql/mysql-original.svg", filter: "lighten" },
    ],
  },
]

export const school = {
  name: "Epitech Marseille",
  years: "2026 - 2029",
  title: "Master of Science: Cloud & Cybersecurity",
  description: "A 3-year programme: a first year of intensive learning covering development, systems and algorithm fundamentals, followed by two years of specialisation in Cloud computing and Cybersecurity.",
  phases: [
    {
      id: 1,
      years: "Year 1 · 2026 - 2027",
      title: "Pre-Master of Science",
      text: "Developement, systems and algorithm fundamentals.",
      current: true,
    },
    {
      id: 2,
      years: "Year 2 - 3 · 2027 - 2029",
      title: "MSc Cloud & Cybersecurity",
      text: "Specialisation in Cloud computing and Cybersecurity.",
      current: false,
    },
  ]
}