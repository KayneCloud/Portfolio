import './SkillCard.css'
import Flag from './Flag'

function SkillCard(props) {
    return (
        <article className="card">
            <h3 className="card-heading">{props.title}<span className="dot-accent">.</span></h3>

            {props.languages ? (
                <ul className="lang-list">
                    {props.languages.map((lang) => (
                        <li key={lang.name}>
                            <Flag country={lang.flag} />
                            <span className="lang-name">{lang.name}</span>
                            <span className={`lang-level ${['Native', 'Natif'].includes(lang.level) ? 'native' : ''}`}>{lang.level}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <ul className="skills-list">
                    {props.items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            )}
        </article>
    )
}

export default SkillCard
