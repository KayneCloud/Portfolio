const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/"

export const projectList = [
  {
    id: 1,
    title: "Job board website",
    date: "10/2026",
    context: "Epitech team project, built with a partner.",
    description: "A website that connects companies and job seekers: companies publish job offers, and candidates browse them and apply online. I built it with a partner as an Epitech team project. I was in charge of the back end, the hidden part of the website that stores the offers and applications in a database and sends the right information to the pages, while my partner built the pages users see and click on. It taught me how to design a database and how to agree on clear rules with a teammate so both halves work together.",
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
      { label: "Live demo", url: "https://chefs-dev.vercel.app" },
      { label: "Source code", url: "https://github.com/KayneCloud/Job_Board" },
    ],
  },
  {
    id: 2,
    title: "Java Game",
    date: "In progress",
    context: "Epitech team project, build a 2D game with Java.",
    description: "A 2D video game I am currently building in Java as an Epitech team project. It is my first project in Java, a language I started learning in October 2026, and it is helping me learn object-oriented programming: organising a program into reusable building blocks that each handle one part of the game.",
    objective: "Build a video-game using Java",
    technologies: [
      { name: "Java", icon: DEVICON + "java/java-original.svg" },
      { name: "OOP" },
    ],
    skills: ["Object-oriented programming", "Teamwork", "Game logic"],
    links: [
      { label: "No source code yet", url: "" },
    ],
  },
  {
    id: 3,
    title: "This portfolio",
    date: "09/2026 - now",
    context: "Epitech project: a multi-page portfolio, published automatically on GitHub Pages.",
    description: "The website you are on right now. I designed and built it to present my profile, my projects and my progress during my studies. It started as a simple static website and I rebuilt it with React, a widely used tool for building modern websites. It adapts to phones and computers, includes a contact form that sends messages straight to my inbox, and goes online automatically every time I save a new version of the code on GitHub.",
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
    description: "A version of the classic word-guessing game Hangman, made as a personal project to practice Python. I first built a version that runs as text in a terminal window, then gave it a real graphical interface with Pygame, a Python library for making games. It helped me practise breaking a problem into small steps and finding and fixing bugs.",
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