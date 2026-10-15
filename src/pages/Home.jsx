import './Home.css'
import ContactCard from '../components/ContactCard'
import SkillCard from '../components/SkillCard'
import { skillCards } from '../data/resume'

function Home() {
  return (
    <main className='home'>
      <img src={import.meta.env.BASE_URL + 'assets/pp.png'}
      className='profile-photo'
      alt='Photo of Kayne SHAW'
      />
      <h1>Kayne SHAW</h1>
      <p className='catchphrase'>
        Student in 3rd year at epitech - seeking apprenticeship in Cloud / Cybersecurity
      </p>
      <p>I'm a third-year student at Epitech Marseille (Pre-MSc in Computer Science), seeking a 33-month apprenticeship placement from January 2027 to September 2029 in cloud computing or cybersecurity. I'm a AWS Certified Cloud Practitioner and preparing for the AWS Certified Solutions Architect - Associate certification. My studies combine the fundamentals of software development, systems, and algorithms with hands-on projects including Python and full-stack web development.</p>
      <section className="home-cards">
        <ContactCard />
        {skillCards.map((card) => (
          <SkillCard
          key={card.id}
          title={card.title}
          icon={card.icon}
          items={card.items}
        />
        ))}
      </section>
    </main>
  )}

export default Home