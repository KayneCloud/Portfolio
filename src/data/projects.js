const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/"

export const projectList = [
    {
        id: 6,
        title: "Chocolatine",
        date: "Now - 12/2026",
        context: "Individual Epitech project: a complete CI/CD pipeline with GitHub Actions.",
        description: "An individual Epitech project where I build a complete CI/CD pipeline with GitHub Actions. Every time code is pushed to the repository, GitHub automatically runs a series of steps to check, build and test it, so problems are caught straight away instead of being found later by hand.",
        technologies: [
            { name: "GitHub Actions", icon: DEVICON + "githubactions/githubactions-original.svg" },
            { name: "Git", icon: DEVICON + "git/git-original.svg" },
            { name: "GitHub", icon: DEVICON + "github/github-original.svg", filter: "invert" },
        ],
        skills: ["CI/CD", "Automation", "Git workflow"],
        links: [
            { label: "No source code yet", url: "" },
        ],
    },
    {
        id: 3,
        title: "Smart Fridge",
        date: "Now - 12/2026",
        context: "Epitech group project in project management.",
        description: "A home-appliance company is considering launching a smart connected fridge, and our group has to prepare the project before any money is invested. We do not build the fridge: we plan how it would be built and launched. This means framing the project, planning the research, building a Gantt chart, defining the team's roles and skills, listing the resources needed, proposing a budget, identifying the main risks and how to reduce them, and writing messages for both the project team and the company's board.",
        technologies: [
            { name: "Gantt chart" },
            { name: "Git", icon: DEVICON + "git/git-original.svg" },
            { name: "PMBOK / PRINCE2" },
        ],
        skills: ["Project planning", "Budgeting", "Risk management", "Communication"],
        links: [
            { label: "No source code yet", url: "" },
        ],
    },
    {
        id: 7,
        title: "Popeye",
        date: "11/2026",
        context: "Individual Epitech project: deploying an application with Docker.",
        description: "An individual Epitech project where I deploy an application with Docker. Docker packages the application and everything it needs into containers, so it starts and runs the same way on any machine, from my computer to a server.",
        technologies: [
            { name: "Docker", icon: DEVICON + "docker/docker-original.svg" },
        ],
        skills: ["Containerisation", "Deployment"],
        links: [
            { label: "No source code yet", url: "" },
        ],
    },
    {
        id: 2,
        title: "Oni Shin Tan",
        date: "11/2026",
        context: "Epitech team project (T-JAV-501), built with a partner: a card game in Java.",
        description: "A card game of demons and gods set in Edo-period Japan: four heroes, 122 cards and an eight-headed dragon waiting at the end. I built it with a partner as an Epitech team project. I was in charge of everything the player sees and hears: the JavaFX interface, the art and the sound, while my partner built the game model, the engine, the data and the computer opponent. It was my first project in Java, a language I started learning in October 2026.",
        role: "I built the interface, the art and the sound; my partner built the model, the engine, the data and the AI.",
        technologies: [
            { name: "Java", icon: DEVICON + "java/java-original.svg" },
            { name: "JavaFX" },
            { name: "OOP" },
        ],
        skills: ["User interface", "Game art and sound", "Teamwork"],
        links: [
            { label: "Game page", url: "oni-shin-tan/" },
            { label: "Download for Windows", url: "https://github.com/PierreDer13/PortFolio/releases/latest/download/OniShinTan-windows.zip" },
        ],
    },
    {
        id: 1,
        title: "Job board website",
        date: "10/2026",
        context: "Epitech team project, built with a partner.",
        description: "A website that connects companies and job seekers: companies publish job offers, and candidates browse them and apply online. I built it with a partner as an Epitech team project. I was in charge of the back end, the hidden part of the website that stores the offers and applications in a database and sends the right information to the pages, while my partner built the pages users see and click on. It taught me how to design a database and how to agree on clear rules with a teammate so both halves work together.",
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
        id: 4,
        title: "This portfolio",
        date: "09/2026 - now",
        context: "Epitech project: a multi-page portfolio, published automatically on GitHub Pages.",
        description: "The website you are on right now. I designed and built it to present my profile, my projects and my progress during my studies. It started as a simple static website and I rebuilt it with React, a widely used tool for building modern websites. It adapts to phones and computers, includes a contact form that sends messages straight to my inbox, and goes online automatically every time I save a new version of the code on GitHub.",
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
        id: 5,
        title: "Hangman game with Pygame",
        date: "09/2026",
        context: "Personal project to practice Python.",
        description: "A version of the classic word-guessing game Hangman, made as a personal project to practice Python. I first built a version that runs as text in a terminal window, then gave it a real graphical interface with Pygame, a Python library for making games. It helped me practise breaking a problem into small steps and finding and fixing bugs.",
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
