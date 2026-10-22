import './Home.css'
import { Link } from 'react-router'
import { certifications, stackGroups } from '../data/resume'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/'
const AWS_LOGO = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div>
          <h1>Kayne Shaw<span className="dot-accent">.</span></h1>
          <span className="role">Cloud &amp; Cybersecurity Major</span>
          <p className="tagline">
            3rd-year Epitech student, looking for an apprenticeship to build <em>secure cloud infrastructure</em> from January 2027.
          </p>
          <div className="buttons">
            <Link to="/contact" className="btn btn-primary">
              Let's connect<span className="arrow">→</span>
            </Link>
            <a href={import.meta.env.BASE_URL + 'cv-kayne-shaw.pdf'} className="btn btn-secondary" download>
              Download my CV
            </a>
          </div>
        </div>
        <div className="photo-wrap">
          <img
            src={import.meta.env.BASE_URL + 'assets/pp.png'}
            className="photo"
            alt="Photo of Kayne Shaw"
          />
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
                <small><span className="status-dot"></span>{cert.status}</small>
              </div>
              {cert.credential && (
                <a className="cert-link" href={cert.credential} target="_blank" rel="noreferrer">
                  View credential<span aria-hidden="true"> ↗</span>
                </a>
              )}
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
                          <span className="chip-arrow" aria-hidden="true">↗</span>
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
