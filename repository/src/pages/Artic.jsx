import "../components/styles/Artic.css";

function Artic(){
  /* Using the word 'Resume' was producing errors
  when creating this page.  A generic name was
  used instead */

    return(
      <div id="resumearea">
       <h1>Download my Resume</h1>
       <a href="./Resume.docx" download>
        <img src="./cv.png" alt="resume download"/>
        </a> 

      </div>
    )
}
export default Artic;

// readme add: <a href="https://www.flaticon.com/free-icons/cv" title="CV icons">CV icons created by Freepik - Flaticon</a>