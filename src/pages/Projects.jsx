import './Projects.css'
import ProjectCard from '../components/ProjectCard'
import { projectList } from '../data/projects'

function Projects() {
  return (
    <main className="projects">
      <h1>Projects</h1>
      <p className="projects-intro">
        School and personal projects, with what I built and what I learned.
      </p>

      <div className="project-grid">
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            date={project.date}
            context={project.context}
            objective={project.objective}
            role={project.role}
            technologies={project.technologies}
            skills={project.skills}
            links={project.links}
          />
        ))}
      </div>
    </main>
  )
}

export default Projects