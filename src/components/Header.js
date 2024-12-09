import { Box } from "@primer/react";
import ChilltownCut from "../assets/logos/ChilltownCut.svg";
import Coverphoto from "../assets/images/Coverphoto.jpg";
import Aboutcover from "../assets/images/Aboutcover.png";
import '../scss/Header.scss';

export function Header() {
  return (
    <div className='header-container'>
<<<<<<< HEAD
      <nav className="nav-container">
        <ul className="nav-list">
          
        </ul> 
      </nav>
=======
      {/* <nav className="nav-container">
        <ul className="nav-list">
          
        </ul> 
      </nav> */}
>>>>>>> 2f55f3e (Describe your changes here)

      <img
        className="logo"
        src={ChilltownCut}
        alt="Chilltown Cut Logo"
      />

      <img 
        className="cover-photo"
        src={Coverphoto}
        alt="Cover"
      />
<<<<<<< HEAD
=======
      <div className="wavy-text-container">
        <div class="wavy-text">
          <span>C</span><span>H</span><span>I</span><span>L</span><span>L</span>
          <span> </span>
          <span>R</span><span>U</span><span>N</span><span>N</span><span>I</span><span>N</span><span>G</span><span>S</span>
          <span> </span>
          <span>C</span><span>H</span><span>I</span><span>L</span><span>L</span>
          <span> </span>
          <span>R</span><span>U</span><span>N</span><span>N</span><span>I</span><span>N</span><span>G</span><span>S</span>
          <span> </span>
        </div>
      </div>
      
>>>>>>> 2f55f3e (Describe your changes here)
    </div>
  );
}



