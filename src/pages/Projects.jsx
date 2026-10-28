import { useEffect, useRef } from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCard'
import { projectList as projectsEn } from '../data/projects'
import { projectList as projectsFr } from '../data/projects.fr'

// How much of each card stays visible above the next one
const PEEK = 24
// Space between a tall card and the footer
const BOTTOM_GAP = 16

function Projects({ lang }) {
    const gridRef = useRef(null)
    const projectList = lang === 'fr' ? projectsFr : projectsEn

    useEffect(() => {
        const grid = gridRef.current
        const cards = [...grid.querySelectorAll('.project-card')]
        let tops = []

        // Works out where each card sticks and where the page ends
        function fitEnd() {
            const header = document.querySelector('.site-header').offsetHeight
            const footer = document.querySelector('.site-footer').offsetHeight
            const firstTop = header + 24
            const screen = window.innerHeight

            // A card sticks under the previous one, or higher if it is too tall for the screen
            tops = cards.map((card, i) =>
                Math.min(firstTop + i * PEEK, screen - footer - BOTTOM_GAP - card.offsetHeight)
            )
            cards.forEach((card, i) => card.style.setProperty('--top', tops[i] + 'px'))

            const last = cards.length - 1
            const space = screen - tops[last] - cards[last].offsetHeight - footer
            grid.style.setProperty('--end-space', Math.max(space, 0) + 'px')
        }

        // Darkens each card as the next one slides over it
        function update() {
            cards.forEach((card, i) => {
                const next = cards[i + 1]
                if (!next) {
                    card.style.filter = ''
                    return
                }
                const distance = next.getBoundingClientRect().top - tops[i + 1]
                const progress = Math.min(Math.max(1 - distance / card.offsetHeight, 0), 1)
                card.style.filter = `brightness(${1 - 0.3 * progress})`
            })
        }

        function onResize() {
            fitEnd()
            update()
        }

        onResize()

        // Measures again whenever a card changes height
        const observer = new ResizeObserver(onResize)
        cards.forEach((card) => observer.observe(card))

        window.addEventListener('scroll', update, { passive: true })
        window.addEventListener('resize', onResize)

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', update)
            window.removeEventListener('resize', onResize)
        }
    }, [lang])

    return (
        <main className="projects">
            <div className="project-grid" ref={gridRef}>
                {projectList.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        index={index}
                        lang={lang}
                        title={project.title}
                        date={project.date}
                        context={project.context}
                        role={project.role}
                        technologies={project.technologies}
                        skills={project.skills}
                        links={project.links}
                        description={project.description}
                    />
                ))}
            </div>
        </main>
    )
}

export default Projects
