import Strava from "../assets/logos/Strava.png"
import Mail from "../assets/logos/Mail.png"
import Instagram from"../assets/logos/Instagram.png"
import '../scss/Footer.scss'

export function Footer () {

return (

<div className="footer-container">
    <div >
        <div className="social-media-container">
            <a href= "https://www.instagram.com/chilltownstreetclub/?hl=en" target="_blank" rel="noopener noreferrer" > 
                <img className="social-media-logo" src={Instagram} alt="Instagram Logo"/>
            </a>

            <a href="https://www.strava.com/clubs/1101849" target="_blank" rel="noopener noreferrer">
                <img className="social-media-logo" src= {Strava} alt="Strava Logo"/>
            </a>
            
            <a href="mailto:chilltownstreetclub@gmail.com" target="_blank" rel="noopener noreferrer">
                <img className="social-media-logo" src={Mail} alt="Email Icon"/>
            </a>

        </div>
        <div>
            <a className="code-of-conduct" href="https://drive.google.com/file/d/1S0yarD4VzoqjqAvYp-KqdyAl892358Wb/view?pli=1" target="_blank">
                Chilltown Street Club Code of conduct
            </a>   
        </div>
         
    </div>

    <div>
    </div>

</div>





     
) 










}