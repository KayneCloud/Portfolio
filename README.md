# Kayne Shaw — Portfolio

My personal portfolio website, built as an Epitech project. It presents my profile, my studies, my projects and a way to contact me, in English and French.

**Live site:** https://kaynecloud.github.io/Portfolio/

## Pages

- **Home** — who I am, my certifications and my tech stack, plus links to contact me and download my CV
- **Resume** — my Epitech programme, a timeline of my education and work experience, my soft skills and languages, and what I learned this year
- **Projects** — my projects as cards that stack on top of each other as you scroll
- **Contact** — my email, location and social links, and a contact form styled like a terminal that sends messages to my inbox

## Features

- English / French switch with a flag button in the navigation bar
- Responsive design for phones, tablets and computers
- Accessibility: text alternatives for images, page language for screen readers, and animations turned off for visitors who ask for reduced motion
- Animated background with drifting clouds and a spotlight that follows the mouse
- Contact form powered by [Web3Forms](https://web3forms.com/)
- Automatic deployment to GitHub Pages with GitHub Actions on every push to `main`

## Technologies

- [React](https://react.dev/) with [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) (`HashRouter`, so page links work on GitHub Pages)
- HTML, CSS and JavaScript
- Icons from [Devicon](https://devicon.dev/)

## Project structure

```
.
├── .github/workflows/deploy.yml   # builds and publishes the site on GitHub Pages
├── index.html
├── public/                        # files served as they are: CVs, profile photo, favicon
└── src/
    ├── App.jsx                    # routes and the current language
    ├── main.jsx
    ├── index.css                  # styles shared by every page
    ├── components/                # reusable pieces: header, footer, cards, terminal, background...
    ├── pages/                     # Home, About (Resume), Projects, Contact
    └── data/                      # the site's content, in English (resume.js, projects.js)
                                   # and French (resume.fr.js, projects.fr.js)
```

The content lives in the `data` files, so text can be updated without touching the page code.

## Run it locally

Requirements: [Node.js](https://nodejs.org/) and npm.

```bash
git clone https://github.com/KayneCloud/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173/Portfolio/).

To build the production version:

```bash
npm run build
```

## Deployment

Every push to `main` runs the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes the `dist` folder to GitHub Pages. In the repository settings, **Pages → Source** must be set to **GitHub Actions**.

## Author

**Kayne Shaw** — Epitech Marseille student, looking for a Cloud & Cybersecurity apprenticeship from January 2027.

- GitHub: [KayneCloud](https://github.com/KayneCloud)
- LinkedIn: [Kayne Shaw](https://www.linkedin.com/in/kayne-shaw-3bb96635a/)
