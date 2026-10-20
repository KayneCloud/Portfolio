import './ProjectCard.css'

function ProjectCard(props) {
  return (
    <article className="project-card" style={{ '--i': props.index }}>
      <p className="project-date">{props.date}</p>
      <h2>{props.title}</h2>

      <h3>Context</h3>
      <p>{props.context}</p>

      <h3>Objective</h3>
      <p>{props.objective}</p>

      {props.role && (
        <>
          <h3>My role</h3>
          <p>{props.role}</p>
        </>
      )}

      <h3>Technologies</h3>
      <ul className="tech-list">
        {props.technologies.map((tech) => (
          <li key={tech.name} className="tech-chip">
            {tech.icon && <img src={tech.icon} alt="" className={tech.filter} />}
            {tech.name}
          </li>
        ))}
      </ul>

      <h3>Skills</h3>
      <ul className="tag-list">
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      {props.links.length > 0 && (
        <ul className="project-links">
          {props.links.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default ProjectCard