function TimelineEntry(props) {
  return (
    <article className={'entry ${props.side}'}>
      <div className="box">
        <p className="entry-date">{props.date}</p>
        <h3>{props.title}</h3>

        {props.description && (
          <ul className="entry-list">
            {props.items.map((item) =>(
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export default TimelineEntry