import { useEffect, useRef } from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCard'
import { projectList } from '../data/projects'

const PEEK = 24 // how much of each earlier card stays visible above the next

function Projects() {
  const gridRef = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    const cards = [...grid.querySelectorAll('.project-card')]

    // 1. Size the page so it ends exactly when the last card lands on the stack
    function fitEnd() {
      const header = document.querySelector('.site-header').offsetHeight
      const footer = document.querySelector('.site-footer').offsetHeight
      const firstTop = header + 24
      grid.style.setProperty('--first-top', firstTop + 'px')

      // Only stack if the tallest card fits on screen with the earlier cards peeking above it
      const tallest = Math.max(...cards.map((card) => card.offsetHeight))
      const lastTop = firstTop + (cards.length - 1) * PEEK
      const fits = lastTop + tallest + footer <= window.innerHeight
      grid.classList.toggle('no-stack', !fits)
      if (!fits) {
        grid.style.setProperty('--end-space', '0px')
        return
      }
      const last = cards[cards.length - 1]
      const space = window.innerHeight - lastTop - last.offsetHeight - footer
      grid.style.setProperty('--end-space', Math.max(space, 0) + 'px')
    }

    // 2. Shrink and dim each card as the next one slides over it
    function update() {
      const firstTop = parseFloat(grid.style.getPropertyValue('--first-top'))
      const isStacking = !grid.classList.contains('no-stack')

      cards.forEach((card, i) => {
        const next = cards[i + 1]
        if (!next || !isStacking) {
          card.style.transform = ''
          card.style.filter = ''
          return
        }
        const nextStick = firstTop + (i + 1) * PEEK
        const distance = next.getBoundingClientRect().top - nextStick
        const progress = Math.min(Math.max(1 - distance / card.offsetHeight, 0), 1)
        card.style.transform = `scale(${1 - 0.05 * progress})`
        card.style.filter = `brightness(${1 - 0.3 * progress})`
      })
    }

    function onResize() {
      fitEnd()
      update()
    }

    onResize()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', onResize)
    window.addEventListener('load', onResize)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('load', onResize)
    }
  }, [])

  return (
    <main className="projects">
      <div className="project-grid" ref={gridRef}>
        {projectList.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
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
