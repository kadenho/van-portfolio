import ProjectGrid from '../../element-assets/project-grid/project-grid'
import { getProjects } from '../../getProjects'
import './portfolio.css'

const projects = getProjects()

export default function Portfolio() {
  return (
    <main className="page-content">
      <h1 className="page-title">Portfolio</h1>
      <ProjectGrid projects={projects} />
    </main>
  )
}
