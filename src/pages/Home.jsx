import './Home.css'
import { certifications, stack } from '../data/resume'

const AWS_LOGO = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'

function Home() {
  return (
    <main className='home'>
      <section className='hero'>
        <p className='label'>Epitech Marseille · 3rd year</p>
        <div className='name-row'>
          <h1>Kayne SHAW</h1>
          <img src={import.meta.env.BASE_URL + 'assets/pp.png'}
          className='profile-photo'
          alt='Photo of Kayne SHAW'
          />
        </div>
        <p className='intro'>
          Seeking a 33-month apprenticeship in cloud computing or cybersecurity, from January 2027 to September 2029.
        </p>
        <a
          className="cv-button"
          href={import.meta.env.BASE_URL + 'cv-kayne-shaw.pdf'}
          download
        >
          Download my CV (PDF)
        </a>
      </section>

      <section className='certs-row'>
        <h2 className='row-label'>Certifications</h2>
        <ul className='certs'>
          {certifications.map((cert) => (
            <li key={cert.id} className={`cert ${cert.planned ? 'planned' : ''}`}>
              <img src={AWS_LOGO} alt='' />
              <div>
                <strong>{cert.name}</strong>
                <span className='status'>{cert.status}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className='skills'>
        <h2 className='row-label'>Stack</h2>
        <ul className='logo-row'>
          {stack.map((tool) => (
            <li key={tool.id} data-name={tool.name}>
              <img src={tool.icon} alt={tool.name} className={tool.filter} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )}

export default Home
