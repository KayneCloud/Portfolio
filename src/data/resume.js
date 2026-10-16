export const education = [
  {
    id: 1,
    date: "2026 - 2029",
    title: "Master of Science: Cloud & Cybersecurity - Epitech Marseille",
    description: "3-year programme: First year of intensive learning, covering developement, system and algorithm fundamentals, followed by two years of specialisation in Cloud computing and Cybersecurity.",
  },
  {
    id: 2,
    date: "2023",
    title: "Undergraduate in Sports Science - Avignon University",
    description: "Study of the biological sciences of sport and their applications to everyday life and physical education."
  },
]

export const projects = [
  {
    id: 1,
    date: "In progress",
    title: "Full-stack job board website",
    items: [
      "Developping a full-stack job board using react (front-end) and Flask (back-end)",
      "Setting up MySQL Database",
      "Creating REST API to manage job postings and applications",
    ],
  },
  
  {
    id: 2,
    date: "09/2026",
    title: "Python game with Pygame",
    items: [
      "Developping a python game with pygame",
      "Managing the score and implementing game mechanics",
      "Using the terminal to run and test the game",
    ],
  },

  {
    id: 3,
    date: "09/2026",
    title: "Front-end portfolio webiste",
    items: [
      "Developping with HTML, CSS, JavaScript and React",
      "Creating a responsive layout",
    ],
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
    id: 1,
    title: "Certifications",
    icon: "formationimage.png",
    items: [
      "AWS Certified Cloud Practitioner - Foundational (08/2026)",
      "AWS Certified Solutions Architect - Associate (planned 12/2026)",
    ],
  },
  {
    id: 2,
    title: "Skills",
    icon: "hardskillsimage.png",
    items: ["AWS", "Python", "Git / GitHub", "PowerShell", "PHP", "MySQL", "HTML / CSS / JS", "React", "Flask"],
  },

    {
    id: 3,
    title: "Soft skills",
    icon: "softskillsimage.png",
    items: ["Adaptability", "Teamwork", "Curiosity", "Eagerness to learn", "Critical thinking"],
  },
  {
    id: 4,
    title: "Languages",
    icon: "languesimage.png",
    items: ["English - Native", "French - Native"],
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
    name: "AWS Cloud Practitioner",
    status: "Certified · 08/2026",
    planned: false,
  },
  {
    id: 2,
    name: "AWS Solutions Architect – Associate",
    status: "In progress · 12/2026",
    planned: true,
  },
]

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/"

export const stack = [
  { id: 1, name: "AWS", icon: DEVICON + "amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { id: 2, name: "Python", icon: DEVICON + "python/python-original.svg" },
  { id: 3, name: "Git", icon: DEVICON + "git/git-original.svg" },
  { id: 4, name: "GitHub", icon: DEVICON + "github/github-original.svg", filter: "invert" },
  { id: 5, name: "PowerShell", icon: DEVICON + "powershell/powershell-original.svg" },
  { id: 6, name: "PHP", icon: DEVICON + "php/php-original.svg" },
  { id: 7, name: "MySQL", icon: DEVICON + "mysql/mysql-original.svg", filter: "lighten" },
  { id: 8, name: "HTML", icon: DEVICON + "html5/html5-original.svg" },
  { id: 9, name: "CSS", icon: DEVICON + "css3/css3-original.svg" },
  { id: 10, name: "JavaScript", icon: DEVICON + "javascript/javascript-original.svg" },
  { id: 11, name: "React", icon: DEVICON + "react/react-original.svg" },
  { id: 12, name: "Flask", icon: DEVICON + "flask/flask-original.svg", filter: "invert" },
]
