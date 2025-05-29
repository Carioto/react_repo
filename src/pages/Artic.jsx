import "../components/styles/Artic.css";

function Artic(){
  /* Using the word 'Resume' was producing errors
  when creating this page.  A generic name was
  used instead */

    return(
      <div id="resumearea">
       <h2>Download my Resume</h2>
       <a href="./Resume.pdf" download>
        <img src="./cv.png" alt="resume download"/>
        </a> 

        <div className="container text-center" id="skills">
      <h2>Technical Skills</h2>
         <div className='d-md-inline-flex flex-wrap justify-content-center'>
          <span>Python -&nbsp;</span>
          <span>Django -&nbsp;</span>
          <span>Python -&nbsp;</span>
          <span>React -&nbsp;</span>
          <span>Vite -&nbsp;</span>
          <span>HTML -&nbsp;</span>
          <span>CSS -&nbsp;</span>
          <span>JavaScript -&nbsp;</span>
          <span>Node.js -&nbsp;</span>
          <span>Express -&nbsp;</span>
          <span>Inquirer -&nbsp;</span>
          <span>MySQL -&nbsp;</span>
          <span>Sequelize -&nbsp;</span>
          <span>NoSQL -&nbsp;</span>
          <span>MongoDB -&nbsp;</span>
          <span>Mongoose -&nbsp;</span>
          <span>Bootstrap -&nbsp;</span>
          <span>Web APIs -&nbsp;</span>
          <span>Third-Party APIs -&nbsp;</span>
          <span>Server-Side APIs -&nbsp;</span>
          <span>Object Oriented Programming -&nbsp;</span>
          <span>dotenv -&nbsp;</span>
          <span>Bcrypt -&nbsp;</span>
          <span>JQuery -&nbsp;</span>
      </div>
      </div>
      </div>
    )
}
export default Artic;

