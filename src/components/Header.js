import { Box } from "@primer/react";
import ChilltownCut from "../assets/logos/ChilltownCut.svg";
import Coverphoto from "../assets/images/Coverphoto.jpg";
import "../scss/Header.scss";

export function Header() {
  return (
    <div className="header-container">
      <img className="logo" src={ChilltownCut} alt="Chilltown Cut Logo" />
      <img className="cover-photo" src={Coverphoto} alt="Cover" />
      
      <div className="wavy-text-container">
        <div className="wavy-text">
          {"CHILL RUNNING CHILL RUNNING CHILL RUNNING".split("").map((letter, index) => (
            <span key={index} style={{ "--i": index + 1 }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

