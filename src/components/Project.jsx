import "./styles/Project.css"

// eslint-disable-next-line react/prop-types
function Project({projects}){
    return (
      <div>
          <div className='d-md-inline-flex flex-wrap' id="proj">

        {projects
              // eslint-disable-next-line react/prop-types
         .map((project) => (
          <div className="" key={project.id} id="imabuild">
           <p> {project.title} </p>
            <img src={project.image} alt={project.title} />
            <a href={project.githubUrl} target="_blank" rel="noreferrer" >
              <img src='./github2.png' id="gitico" /> 
            </a>
            {project.deployedUrl && 
              <a href={project.deployedUrl} target="_blank" rel="noreferrer" >
              <img src='./live.png' id="liveico" /> 
            </a>
            }
          </div>
              )
        )}
 


          </div>
      </div>
    )

}
export default Project;

