import underConstruction from '../../../assets/under_construction.svg'
import './index.css'

interface ProjectProps {
  load: boolean
}

const ProjectExample: React.FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <div className='project-card-container'>
      <div className='image-container'>
        <img className={props.load === true ? "project-thumbnail" : ""}
          style={{ opacity: 0 }}
          src={underConstruction} alt="main project"
        />
      </div>
      <p className={props.load === true ? "project-category" : "hidden-info"}>Under construction</p>
      <h3 className={props.load === true ? "project-title" : "hidden-info"}>Under construction</h3>
    </div>
  )
}

export default ProjectExample