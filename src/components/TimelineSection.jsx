import TimelineEntry from './TimelineEntry'

function TimelineSection(props) {
  return (
    <section>
      <div className="section-title">
        <img src={import.meta.env.BASE_URL + 'assets/' + props.icon}
          className="section-icon" alt=""/>
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