import { Box } from "@primer/react";
import Aboutcover from "../assets/images/Aboutcover.png";
import '../scss/AboutMe.scss';

export function AboutMe() {
  return (
    <div className='about-me-container'>
      <img 
        className="cover-photo" 
        src={Aboutcover} 
        alt="About cover"
      />
      
      <div className="overlay">
            <div className="AboutMe-text">
            <h1>ABOUT</h1> 
                <p>
                Founded in 2022, We blend running, biking, meditation, and yoga in Jersey City to empower movement,
                foster community, and support local businesses. 
                Join us to experience a vibrant and holistic approach 
                to wellness.
                </p>
      </div>
    </div>
    </div>
  );
}


