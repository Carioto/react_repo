import "./styles/Project.css"

// eslint-disable-next-line react/prop-types
function Project({projects}){
    return (
      <div>
          <div className='d-md-inline-flex flex-wrap' id="proj">

        {projects
              // eslint-disable-next-line react/prop-types
              .map((project) => (
           <a key={project.id} href={project.githubUrl} target="_blank" rel="noreferrer"> 
            <img src={project.image} alt={project.title} />
           <p> {project.title} </p>
            </a>
              )
        )}
 


          </div>
      </div>
    )

}
export default Project;