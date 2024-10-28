import { Box } from "@primer/react";
import ChilltownCut from "../assets/logos/ChilltownCut.svg";
import Coverphoto from "../assets/images/Coverphoto.jpg";
import Aboutcover from "../assets/images/Aboutcover.png";
import '../scss/Header.scss';

export function Header() {
  return (
    <div className='header-container'>
      <nav className="nav-container">
        <ul className="nav-list">
          
        </ul> 
      </nav>

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
    </div>
  );
}



