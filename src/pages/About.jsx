import './About.css'
import TimelineEntry from '../components/TimelineEntry'
import SkillCard from '../components/SkillCard'
import { school, education, otherExperience, learning, skillCards } from '../data/resume'

function About() {
  // one list for the whole timeline, so left / right keeps alternating across both sections
  const sideOf = (index) => (index % 2 === 0 ? 'right' : 'left')

  return (
    <main className="about">

      {/* Epitech box */}
      <div className="school">
        <div className="school-top">
          <span className="school-name">{school.name}</span>
          <span className="school-years">{school.years}</span>
        </div>
        <h1>{school.title}<span className="dot-accent">.</span></h1>
        <p className="school-desc">{school.description}</p>

        <div className="school-track">
          {school.phases.map((phase) => (
            <div key={phase.id} className={`phase ${phase.current ? 'now' : ''}`}>
              <div className="phase-head">
                <span className="phase-years">{phase.years}</span>
                {phase.current && <span className="now-tag">Now</span>}
              </div>
              <h2>{phase.title}</h2>
              <p>{phase.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* one continuous timeline */}
      <div className="timeline">
        <h2 className="line-title">Education<span className="dot-accent">.</span></h2>
        {education.map((entry, index) => (
          <TimelineEntry key={entry.id} side={sideOf(index)} {...entry} />
        ))}

        <h2 className="line-title">Professional Experiences<span className="dot-accent">.</span></h2>
        {otherExperience.map((entry, index) => (
          <TimelineEntry key={entry.id} side={sideOf(education.length + index)} {...entry} />
        ))}
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
        <h2>What I learned this year<span className="dot-accent">.</span></h2>
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