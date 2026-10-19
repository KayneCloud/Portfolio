import './SkillCard.css'

function SkillCard(props) {
  return (
    <article className="card">
      <div className='card-title'>
        <h2>{props.title}</h2>
      </div>
      <ul className="skills-list">
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default SkillCard