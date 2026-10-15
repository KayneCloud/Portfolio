import './About.css'
import TimelineSection from '../components/TimelineSection'
import { education, projects, otherExperience } from '../data/resume'

function About() {
  return (
   <main className="about">
  <h1>About</h1>

  <div className="career-timeline">
    <TimelineSection title="Education" icon="formationimage.png" entries={education} />
    <TimelineSection title="Projects & Experience" icon="experienceimage.png" entries={projects} />
    <TimelineSection title="Other Experience" icon="experienceimage.png" entries={otherExperience} />
  </div>
</main>
  )
}

export default About