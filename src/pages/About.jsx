import './About.css'
import TimelineSection from '../components/TimelineSection'
import SkillCard from '../components/SkillCard'
import { education, projects, otherExperience, learning, skillCards } from '../data/resume'

function About() {
  return (
    <main className="about">

      <div className="career-timeline">
        <TimelineSection title="Education" entries={education} />
        <TimelineSection title="Projects & Experience" entries={projects} />
        <TimelineSection title="Other Experience" entries={otherExperience} />
      </div>

      <section className="personal-skills">
        <h2>Soft skills &amp; languages<span className='dot-accent'>.</span></h2>
        <div className="skill-grid">
          {skillCards.map((card) => (
            <SkillCard
              key={card.id}
              title={card.title}
              items={card.items}
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