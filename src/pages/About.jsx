import './About.css'
import TimelineSection from '../components/TimelineSection'
import { education, projects, otherExperience, learning } from '../data/resume'

function About() {
  return (
    <main className="about">
      <h1>About</h1>

      <div className="career-timeline">
        <TimelineSection title="Education" icon="formationimage.png" entries={education} />
        <TimelineSection title="Projects & Experience" icon="experienceimage.png" entries={projects} />
        <TimelineSection title="Other Experience" icon="experienceimage.png" entries={otherExperience} />
      </div>

      <section className="learning">
        <h2>What I learned this year</h2>
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