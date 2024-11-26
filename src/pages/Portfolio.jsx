import Project from '../components/Project';
import projects from '../components/projects'
import personal from '../components/personal';
const noteSize={fontSize:'11px'}

function Portfolio(){
    return(
      <div>
        <p style={noteSize}>Note live projects will take a few minutes to initially load</p>
        <h2>Personal Projects</h2>
        <Project projects={personal} />

        <h2>Boot Camp Projects - Solo and Group</h2>
        <Project projects={projects} />
      </div>
    );
}
export default Portfolio;