import './Home.css'
import { Link } from 'react-router'
import * as resumeEn from '../data/resume'
import * as resumeFr from '../data/resume.fr'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/'
const AWS_LOGO = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'

const TEXT = {
    en: {
        role: 'Cloud & Cybersecurity Major',
        taglineStart: '3rd-year Epitech student, looking for an apprenticeship to build ',
        taglineEm: 'secure cloud infrastructure',
        taglineEnd: ' from January 2027.',
        connect: "Let's connect",
        cv: 'Download my CV',
        cvFile: 'CV_Kayne_Shaw_Cloud_EN.pdf',
        photo: 'Photo of Kayne Shaw',
        credential: 'View credential',
    },
    fr: {
        role: 'Majeure Cloud & Cybersécurité',
        taglineStart: 'Étudiant en 3e année à Epitech, je cherche une alternance pour construire des ',
        taglineEm: 'infrastructures cloud sécurisées',
        taglineEnd: ' à partir de janvier 2027.',
        connect: 'Me contacter',
        cv: 'Télécharger mon CV',
        cvFile: 'CV_Kayne_Shaw_Cloud_FR.pdf',
        photo: 'Photo de Kayne Shaw',
        credential: 'Voir le certificat',
    },
}

function Home({ lang }) {
    const t = TEXT[lang]
    const { certifications, stackGroups } = lang === 'fr' ? resumeFr : resumeEn

    return (
        <main className="home">
            <section className="hero">
                <div>
                    <h1>Kayne Shaw<span className="dot-accent">.</span></h1>
                    <span className="role">{t.role}</span>
                    <p className="tagline">
                        {t.taglineStart}<em>{t.taglineEm}</em>{t.taglineEnd}
                    </p>
                    <div className="buttons">
                        <Link to="/contact" className="btn btn-primary">
                            {t.connect}<span className="arrow">→</span>
                        </Link>
                        <a href={import.meta.env.BASE_URL + t.cvFile} className="btn btn-secondary" download>              {t.cv}
                        </a>
                    </div>
                </div>
                <div className="photo-wrap">
                    <img
                        src={import.meta.env.BASE_URL + 'assets/pp.webp'}
                        className="photo"
                        alt={t.photo}
                        fetchPriority="high"
                    />
                    <svg width="0" height="0" className="feather-svg" aria-hidden="true">
                        <filter id="feather">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="soft" />
                            <feComposite in="SourceGraphic" in2="soft" operator="in" />
                        </filter>
                    </svg>
                </div>
            </section>

            <section className="strip">
                <div className="col">
                    <h2>Certifications<span className="dot-accent">.</span></h2>
                                        {certifications.map((cert) => (
                                                <div key={cert.id} className={`cert ${cert.planned ? 'planned' : ''}`}>
                            <img src={cert.logo ? DEVICON + cert.logo : AWS_LOGO} alt="" />
                            <div>
                                <strong>{cert.name}</strong>
                                <div className="cert-status">
                                    <small><span className="status-dot"></span>{cert.status}</small>
                                    {cert.credential && (
                                        <a className="cert-link" href={cert.credential} target="_blank" rel="noreferrer">
                                            {t.credential} →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col">
                    <h2>Stack<span className="dot-accent">.</span></h2>
                    <div className="stack-groups">
                        {stackGroups.map((group) => (
                            <div key={group.id} className="group">
                                <h3>{group.title}</h3>
                                <ul className="chips">
                                    {group.tools.map((tool) =>
                                        tool.url ? (
                                            <li key={tool.name}>
                                                <a className="chip chip-link" href={tool.url} target="_blank" rel="noreferrer">
                                                    <img src={tool.icon} alt="" className={tool.filter} />
                                                    {tool.name}
                                                </a>
                                            </li>
                                        ) : (
                                            <li key={tool.name} className="chip">
                                                <img src={tool.icon} alt="" className={tool.filter} />
                                                {tool.name}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
