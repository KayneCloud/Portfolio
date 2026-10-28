// Shows a description: plain text, or pieces with links and bold words
function renderText(description) {
    if (!Array.isArray(description)) return description

    return description.map((part, index) => {
        if (typeof part === 'string') {
            return part
        }
        if (part.link) {
            return <a key={index} href={part.url} target="_blank" rel="noreferrer">{part.link}</a>
        }
        if (part.bold) {
            return <strong key={index}>{part.bold}</strong>
        }
        return null
    })
}

function TimelineEntry(props) {
    return (
        <article className={`entry ${props.side}`}>
            <div className="box">
                <p className="entry-date">{props.date}</p>
                <h3>{props.title}</h3>

                {props.description && (
                    <p className="entry-text">{renderText(props.description)}</p>
                )}

                {props.items && (
                    <ul className="entry-list">
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