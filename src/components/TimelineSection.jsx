import TimelineEntry from './TimelineEntry'

function TimelineSection(props) {
  return (
    <section>
      <div className="section-title">
        <h2>{props.title}<span className='dot-accent'>.</span></h2>
      </div>

      {props.entries.map((entry) => (
        <TimelineEntry
          key={entry.id}
          date={entry.date}
          title={entry.title}
          description={entry.description}
          items={entry.items}
        />
      ))}
    </section>
  )
}

export default TimelineSection