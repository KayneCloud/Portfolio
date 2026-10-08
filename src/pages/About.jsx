import TimelineEntry from '../components/TimelineEntry'
import { education } from '../data/resume'

function About() {
  return (
    <main className="about">
      <h1>About</h1>
      <section>
        <h2>Education</h2>
        {education.map((entry) => (
          <TimelineEntry
            key={entry.id}
            date={entry.date}
            title={entry.title}
            description={entry.description}
            items={entry.items}
          />
        ))}
      </section>
    </main>
  )
}

export default About