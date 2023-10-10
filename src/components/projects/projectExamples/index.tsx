import underConstruction from '../../../assets/under_construction.svg'
import './index.css'

interface ProjectProps {
  load: boolean
}

const ProjectExample: React.FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <div>
      <img className={props.load === true ? "project-thumbnail" : ""} style={{opacity: 0}} src={underConstruction} alt="main project" />
    </div>
  )
}

export default ProjectExample