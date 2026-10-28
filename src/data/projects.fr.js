// French version of projects.js
// ...en[0] copies the English project, then the lines below replace the text
import { projectList as en } from './projects'

export const projectList = [
    {
        ...en[0],
        title: "Site de job board",
        context: "Projet d'équipe Epitech, réalisé en binôme.",
        description: "Un site qui met en relation entreprises et chercheurs d'emploi : les entreprises publient des offres, et les candidats les consultent et postulent en ligne. Je l'ai réalisé en binôme dans le cadre d'un projet d'équipe Epitech. J'étais chargé du back-end, la partie invisible du site qui enregistre les offres et les candidatures dans une base de données et envoie les bonnes informations aux pages, tandis que mon binôme a réalisé les pages que les utilisateurs voient et utilisent. Ce projet m'a appris à concevoir une base de données et à me mettre d'accord sur des règles claires avec un coéquipier pour que les deux parties fonctionnent ensemble.",
        role: "J'ai réalisé le back-end et la base de données ; mon binôme a réalisé le front-end en React.",
        skills: ["Conception d'API", "Modélisation de base de données", "Travail en équipe"],
        links: [{ label: "Demo Live", url: "https://chefs-dev.vercel.app" },{ label: "Code source", url: en[0].links[1].url }],
    },
    {
        ...en[1],
        title: "Jeu en Java",
        date: "En cours - 11/2026",
        context: "Projet d'équipe Epitech : créer un jeu 2D en Java.",
        description: "Un jeu vidéo en 2D que je développe actuellement en Java dans le cadre d'un projet d'équipe Epitech. C'est mon premier projet en Java, un langage que j'ai commencé à apprendre en octobre 2026, et il m'aide à apprendre la programmation orientée objet : organiser un programme en blocs réutilisables qui gèrent chacun une partie du jeu.",
        skills: ["Programmation orientée objet", "Travail en équipe", "Logique de jeu"],
        links: en[1].links.map((link) => ({ ...link, label: "Pas encore de code source" })),
    },
    {
        ...en[2],
        title: "Smart Fridge",
        date: "En cours - 12/2026",
        context: "Projet de groupe Epitech en gestion de projet.",
        description: "Une entreprise d'électroménager envisage de lancer un réfrigérateur intelligente, et notre groupe doit préparer le projet avant tout investissement. Nous ne fabriquons pas le réfrigérateur : nous planifions comment il serait conçu et lancé. Cela consiste à cadrer le projet, planifier les études, construire un diagramme de Gantt, définir les rôles et compétences de l'équipe, lister les ressources nécessaires, proposer un budget, identifier les principaux risques et comment les réduire, et rédiger des messages pour l'équipe projet et pour le conseil d'administration.",
        technologies: [
            { name: "Diagramme de Gantt" },
            { name: "Git", icon: en[2].technologies[1].icon },
            { name: "PMBOK / PRINCE2" },
        ],
        skills: ["Planification de projet", "Budgétisation", "Gestion des risques", "Communication"],
        links: [{ label: "Pas encore de code source", url: "" }],
    },
    {
        ...en[3],
        title: "Ce portfolio",
        date: "09/2026 - aujourd'hui",
        context: "Projet Epitech : un portfolio multi-pages, publié automatiquement sur GitHub Pages.",
        description: "Le site sur lequel vous êtes en ce moment. Je l'ai conçu et réalisé pour présenter mon profil, mes projets et ma progression pendant mes études. Il a commencé comme un simple site statique, puis je l'ai reconstruit avec React, un outil très utilisé pour créer des sites modernes. Il s'adapte aux téléphones et aux ordinateurs, comprend un formulaire de contact qui envoie les messages directement dans ma boîte mail, et se met en ligne automatiquement chaque fois que j'enregistre une nouvelle version du code sur GitHub.",
        skills: ["Responsive design", "Accessibilité", "Workflow Git"],
        links: [{ label: "Code source", url: en[3].links[0].url }],
    },
    {
        ...en[4],
        title: "Jeu du pendu avec Pygame",
        context: "Projet personnel pour pratiquer Python.",
        description: "Une version du jeu classique du pendu, réalisée comme projet personnel pour pratiquer Python. J'ai d'abord créé une version qui fonctionne en texte dans un terminal, puis je lui ai donné une vraie interface graphique avec Pygame, une bibliothèque Python pour créer des jeux. Ce projet m'a aidé à découper un problème en petites étapes et à trouver et corriger des bugs.",
        skills: ["Logique de jeu", "Débogage", "Tests dans le terminal"],
        links: [{ label: "Code source", url: en[4].links[0].url }],
    },
]
