import './About.css'
import TimelineSection from '../components/TimelineSection'
import SkillCard from '../components/SkillCard'
import { education, otherExperience, learning, skillCards } from '../data/resume'

function About() {
  return (
    <main className="about">

      <div className="career-timeline">
        <TimelineSection title="Education" entries={education} />
        <TimelineSection title="Professional Experiences" entries={otherExperience} />
      </div>

      <section className="personal-skills">
        <div className="skill-grid">
          {skillCards.map((card) => (
            <SkillCard
              key={card.id}
              title={card.title}
              items={card.items}
              languages={card.languages}
            />
          ))}
        </div>
      </section>

      <section className="learning">
        <h2>What I learned this year<span className='dot-accent'>.</span></h2>
        {learning.map((item) => (
          <article key={item.id} className="learning-item">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default About