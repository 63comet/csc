import { Box } from "@primer/react";
import Aboutcover from "../assets/images/Aboutcover.png";
import ABOUT from "../assets/logos/ABOUT.png"
import '../scss/AboutMe.scss';



export function AboutMe() {
  return (
    <div className='about-me-container'>
      <img 
      className="logo"
      src={ABOUT}
      alt="ABOUT logo"
      />  
      <img 
        className="cover-photo" 
        src={Aboutcover} 
        alt="About cover"
      />
    </div>
  );

}

