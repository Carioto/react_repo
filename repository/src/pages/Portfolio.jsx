import Project from '../components/Project';
import projects from '../components/projects'

function Portfolio(){
    return(
      <div>
        <h1>Projects</h1>
        <Project projects={projects} />
      </div>
    );
}
export default Portfolio;