function TimelineEntry(props) {
    return (
        <article className="timeline-entry">
            <span className="timeline-marker"></span>
            <div className="timeline-content">
                <p className="timeline-date">{props.date}</p>
                <h3>{props.title}</h3>

                {props.description && (
                    <p className="timeline-description">{props.description}</p>
                )}

                {props.items && (
                    <ul className="timeline-description">
                        {props.items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    )
}

export default TimelineEntry