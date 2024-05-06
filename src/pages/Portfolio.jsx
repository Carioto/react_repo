import Project from '../components/Project';
import projects from '../components/projects'

function Portfolio(){
    return(
      <div>
        <h2>Projects</h2>
        <Project projects={projects} />
      </div>
    );
}
export default Portfolio;