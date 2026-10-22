const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/"

export const projectList = [
  {
    id: 1,
    title: "Job board website",
    date: "10/2026",
    context: "Epitech team project, built with a partner.",
    objective: "Build a job board where companies post job offers and candidates apply to them.",
    role: "I built the back end and the database; my partner built the React front end.",
    technologies: [
      { name: "Python", icon: DEVICON + "python/python-original.svg" },
      { name: "Flask", icon: DEVICON + "flask/flask-original.svg", filter: "invert" },
      { name: "MySQL", icon: DEVICON + "mysql/mysql-original.svg", filter: "lighten" },
      { name: "REST API" },
    ],
    skills: ["API design", "Database modelling", "Teamwork"],
    links: [
      { label: "Source code", url: "https://github.com/KayneCloud/Job_Board" },
    ],
  },
  {
    id: 2,
    title: "Java Game",
    date: "In progress",
    context: "Epitech team project, build a 2D game with Java.",
    objective: "Build a video-game using Java",
    technologies: [
      { name: "Java", icon: DEVICON + "java/java-original.svg" },
      { name: "OOP" },
    ],
    skills: ["", "", ""],
    links: [
      { label: "No source code yet", url: "" },
    ],
  },
  {
    id: 3,
    title: "This portfolio",
    date: "09/2026 - now",
    context: "Epitech project: a multi-page portfolio, published automatically on GitHub Pages.",
    objective: "Present my profile, projects and progress, rebuilt with React components.",
    technologies: [
      { name: "React", icon: DEVICON + "react/react-original.svg" },
      { name: "Vite", icon: DEVICON + "vitejs/vitejs-original.svg" },
      { name: "React Router", icon: DEVICON + "reactrouter/reactrouter-plain.svg", filter: "invert" },
      { name: "HTML", icon: DEVICON + "html5/html5-original.svg" },
      { name: "CSS", icon: DEVICON + "css3/css3-original.svg" },
      { name: "JavaScript", icon: DEVICON + "javascript/javascript-original.svg" },
    ],
    skills: ["Responsive design", "Accessibility", "Git workflow"],
    links: [
      { label: "Source code", url: "https://github.com/KayneCloud/Portfolio" },
    ],
  },
  {
    id: 4,
    title: "Hangman game with Pygame",
    date: "09/2026",
    context: "Personal project to practice Python.",
    objective: "Create a playable hangman game, first in the terminal, then with a graphical interface.",
    technologies: [
      { name: "Python", icon: DEVICON + "python/python-original.svg" },
      { name: "Pygame" },
    ],
    skills: ["Game logic", "Debugging", "Testing in the terminal"],
    links: [
      { label: "Source code", url: "https://github.com/KayneCloud/Hangman-python-game" },
    ],
  },
]