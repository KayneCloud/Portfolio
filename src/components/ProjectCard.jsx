import './ProjectCard.css'

const GITHUB_ICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/github/github-original.svg'

function ProjectCard(props) {
  const number = String(props.index + 1).padStart(2, '0')

  return (
    <article className="project-card" style={{ '--i': props.index }}>
      <div className="card-top">
        <span className="card-number" aria-hidden="true">{number}</span>
        <span className="card-date">{props.date}</span>
      </div>

      <div className="card-body">
        <h2>{props.title}<span className="dot-accent">.</span></h2>
        <div className="card-about">
          <h3 className="card-label">Project description</h3>
          <p className="card-summary">{props.description}</p>
        </div>
        <div className="card-meta">
          <div>
            <h3>Context</h3>
            <p>{props.context}</p>
          </div>

          {props.role && (
            <div>
              <h3>My role</h3>
              <p>{props.role}</p>
            </div>
          )}

          <div>
            <h3>Technologies</h3>
            <ul className="tech-list">
              {props.technologies.map((tech) => (
                <li key={tech.name} className="tech-chip">
                  {tech.icon && <img src={tech.icon} alt="" className={tech.filter} />}
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Skills</h3>
            <p className="skill-list">
              {props.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </p>
          </div>
        </div>
      </div>

      {props.links.length > 0 && (
        <div className="card-footer">
          {props.links.map((link) => (
            <a key={link.url} className="repo-link" href={link.url} target="_blank" rel="noopener noreferrer">
              {link.url.includes('github.com') && <img src={GITHUB_ICON} alt="" />}
              {link.label}
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export default ProjectCard
