// import underConstruction from '../../../assets/under_construction.svg'
import './index.css'

interface ProjectProps {
  load: boolean
  projectCategory: string
  projectTitle: string
  projectImage: string
}

const ProjectExample: React.FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <div>
      <div className='image-container'>
        <img className={props.load === true ? "project-thumbnail" : "op-0 hidden-thumbnail"}
          src={props.projectImage} alt="main project"
        />
      </div>
      <div className="thumbnail-info-container">
        <p className={props.load === true ? "project-category" : "hidden-info"}>{props.projectCategory}</p>
        <h3 className={props.load === true ? "project-title" : "hidden-info"}>{props.projectTitle}</h3>
      </div>
    </div>
  )
}

export default ProjectExample