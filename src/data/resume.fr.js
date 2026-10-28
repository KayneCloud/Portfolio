// French version of resume.js
import { stackGroups as stackGroupsEn, certifications as certificationsEn } from './resume'

export const education = [
    {
        id: 1,
        date: "2026 - 2029",
        title: "Master of Science : Cloud & Cybersécurité - Epitech Marseille",
        description: [
            "Mène à un titre de ",
            { bold: "Master" },
            " ou à un titre ",
            { link: "RNCP de niveau 7", url: "https://www.francecompetences.fr/recherche/rncp/42634/" },
            " d'",
            { bold: "Architecte des systèmes d'information" },
            ". Le programme forme des experts Cloud capables de déployer, stocker et gérer des données sur des serveurs situés dans des data centers externalisés, tout en maîtrisant les coûts opérationnels.",
        ],
        items: [
            "Outils des infrastructures serveur : systèmes d'exploitation, virtualisation, orchestration, répartition de charge",
            "Administration d'une infrastructure réseau",
            "Conception et développement d'applications et de services Cloud",
            "Construction, supervision et maintenance d'un Cloud privé ou public",
            "Budgétisation d'une solution et optimisation de ses coûts",
        ],
    },
    {
        id: 2,
        date: "2023 - 2026",
        title: "Licence STAPS - Avignon Université",
        description: "Étude des sciences biologiques du sport et de leurs applications dans la vie quotidienne et en éducation physique.",
    },
]

export const otherExperience = [
    {
        id: 1,
        date: "2025 - 2026",
        title: "Assistant d'éducation physique - Éducation nationale",
        items: [
            "Gestion de groupes",
            "Organisation des cours",
            "Réagir efficacement aux imprévus",
            "Communication et adaptation",
        ],
    },
    {
        id: 2,
        date: "2021 - 2022",
        title: "Équipier polyvalent - Subway, Comox (Canada)",
        items: [
            "Service client",
            "Gestion des stocks",
            "Préparation des commandes",
            "Travail en équipe",
        ],
    },
]

export const skillCards = [
    {
        id: 3,
        title: "Savoir-être",
        items: ["Adaptabilité", "Travail en équipe", "Curiosité", "Envie d'apprendre", "Esprit critique"],
    },
    {
        id: 4,
        title: "Langues",
        languages: [
            { name: "Anglais", level: "Natif", flag: "uk" },
            { name: "Français", level: "Natif", flag: "fr" },
            { name: "Japonais", level: "Élémentaire", flag: "jp" },
        ],
    },
]

export const learning = [
    {
        id: 1,
        title: "Les bases du Cloud avec AWS",
        text: "La préparation de la certification AWS Cloud Practitioner, obtenue en août 2026, m'a donné de solides bases sur les concepts clés du Cloud : ce que sont les services Cloud, comment ils sont facturés, et comment la responsabilité de la sécurité est partagée entre le fournisseur et le client. Je poursuis maintenant avec la certification AWS Solutions Architect - Associate.",
    },
    {
        id: 2,
        title: "Prendre en main Linux",
        text: "Avec le cours Introduction to Linux (LFS101) de la Linux Foundation, j'apprends à travailler en ligne de commande : me déplacer dans le système de fichiers, gérer les fichiers et les permissions, et comprendre l'organisation d'un système Linux, des compétences essentielles pour travailler avec des serveurs dans le Cloud.",
    },
    {
        id: 3,
        title: "Apprendre un nouveau langage : Java",
        text: "Je n'avais jamais écrit de Java avant octobre 2026. Pendant le bootcamp Java de 10 jours d'Epitech, j'ai appris sa syntaxe et les bases de la programmation orientée objet grâce à des exercices quotidiens, corrigés automatiquement par un bot sur GitHub. Cela m'a appris à lire attentivement les consignes et à tester mon code avant de le rendre.",
    },
    {
        id: 4,
        title: "Le back-end en équipe",
        text: "Sur le projet de job board, j'étais responsable de l'API Flask et de la base de données MySQL, ce qui m'a appris à me mettre d'accord sur une API avec un coéquipier qui travaillait sur le front-end. Présenter le projet ensuite m'a appris à expliquer clairement mes choix techniques et à décrire ma part dans un projet d'équipe.",
    },
    {
        id: 5,
        title: "Construire et publier ce site",
        text: "J'ai commencé ce portfolio en HTML et CSS, puis je l'ai reconstruit avec React, en découpant les pages en composants réutilisables et en plaçant le contenu dans des fichiers de données. Je l'ai rendu utilisable sur toutes les tailles d'écran et par les visiteurs qui utilisent un lecteur d'écran. Je gère le code avec Git et GitHub, et j'ai mis en place un workflow GitHub Actions qui publie le site sur GitHub Pages à chaque fois que j'envoie du nouveau code.",
    },
]

// Same certificates as the English file, with the status translated
const statusFr = ["Certifié · 08/2026", "En cours · 12/2026", "En cours · 11/2026"]

export const certifications = certificationsEn.map((cert, index) => ({
    ...cert,
    status: statusFr[index],
}))

// Same stack as the English file, with the group titles translated
const titlesFr = ["Cloud & Outils", "Langages", "Front-end", "Back-end & Données"]

export const stackGroups = stackGroupsEn.map((group, index) => ({
    ...group,
    title: titlesFr[index],
}))

export const school = {
    name: "Epitech Marseille",
    years: "2026 - 2029",
    title: "Master of Science : Cloud & Cybersécurité",
    description: "Un programme en 3 ans : une première année d'apprentissage intensif couvrant les bases du développement, des systèmes et de l'algorithmique, suivie de deux années de spécialisation en Cloud computing et en cybersécurité.",
    phases: [
        {
            id: 1,
            years: "1re année · 2026 - 2027",
            title: "Pre-Master of Science",
            text: "Bases du développement, des systèmes et de l'algorithmique.",
            current: true,
        },
        {
            id: 2,
            years: "2e - 3e années · 2027 - 2029",
            title: "MSc Cloud & Cybersécurité",
            text: "Spécialisation en Cloud computing et en cybersécurité.",
            current: false,
        },
    ],
}
