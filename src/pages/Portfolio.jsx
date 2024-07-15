import Project from '../components/Project';
import projects from '../components/projects'
import personal from '../components/personal';

function Portfolio(){
    return(
      <div>
        <h2>Personal Projects</h2>
        <Project projects={personal} />

        <h2>Boot Camp Projects - Solo and Group</h2>
        <Project projects={projects} />
      </div>
    );
}
export default Portfolio;