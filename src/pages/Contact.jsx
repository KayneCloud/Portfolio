import './Contact.css'
import { useState } from 'react'
import ContactTerminal from '../components/ContactTerminal'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/'

function Contact({ lang }) {
    const fr = lang === 'fr'
    const [copied, setCopied] = useState(false)

    function copyEmail() {
        navigator.clipboard.writeText('kayne.shaw@epitech.eu')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <main className="contact">
            <div className="contact-grid">
                <section className="contact-info">
                    <h1>{fr ? 'Contactez-moi' : 'Get in touch'}<span className="dot-accent">.</span></h1>
                    <p className="contact-intro">
                        {fr ? 'Envoyez-moi un message avec le formulaire, ou contactez-moi directement.' : 'Send me a message with the form, or reach me directly.'}
                    </p>

                    <ul className="info-list">
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <path d="m3 7 9 6 9-6" />
                            </svg>
                            <a href="mailto:kayne.shaw@epitech.eu">kayne.shaw@epitech.eu</a>
                            <button className="copy-btn" type="button" onClick={copyEmail}>
                                {copied ? (fr ? 'Copié ✓' : 'Copied ✓') : (fr ? 'Copier' : 'Copy')}
                            </button>
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                                <circle cx="12" cy="9.5" r="2.5" />
                            </svg>
                            <span>Marseille, France</span>
                        </li>
                    </ul>

                    <div className="socials">
                        <a className="btn btn-primary" href="https://github.com/KayneCloud" target="_blank" rel="noreferrer">
                            <img src={DEVICON + 'github/github-original.svg'} alt="" />
                            GitHub<span className="arrow" aria-hidden="true">→</span>
                        </a>
                        <a className="btn btn-primary" href="https://www.linkedin.com/in/kayne-shaw-3bb96635a/" target="_blank" rel="noreferrer">
                            <img src={DEVICON + 'linkedin/linkedin-original.svg'} alt="" />
                            LinkedIn<span className="arrow" aria-hidden="true">→</span>
                        </a>
                    </div>
                </section>

                {/* Restarts the terminal when the language changes */}
                <ContactTerminal lang={lang} key={lang} />
            </div>
        </main>
    )
}

export default Contact
