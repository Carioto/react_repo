import './styles/Footer.css'

function Footer() {

return (
    <div>
     <div id="foot">
        <a  className=".img-fluid gitImg" href="https://github.com/Carioto/">
            <img src={"/GitHub.png"} alt="GitHub"/>
        </a>
      
        <a className=".img-fluid linkImg" href="https://www.linkedin.com/in/david-carioto">
            <img src={"/Linkedin.png"} alt="Linkedin"/>
        </a>
      

      </div>
    </div>
)

}
export default Footer;