import React from "react";
import "../scss/AutoScrollCarousel.scss";
import bay_st from "../assets/logos/Partners/bay_st.png";
import CampSnap from "../assets/logos/Partners/CampSnap.png";
import CraversCircle from "../assets/logos/Partners/CraversCircle.png";
import GoMacro from "../assets/logos/Partners/GoMacro.png";
import Grove_Street_bikes from "../assets/logos/Partners/Grove_Street_bikes.png";
import Jersey_City_Lagers from "../assets/logos/Partners/Jersey_City_Lagers.png";
import Knockaround from "../assets/logos/Partners/Knockaround.png";
import MaskGroup from "../assets/logos/Partners/MaskGroup.png";
import ONRunning from "../assets/logos/Partners/ONRunning.png";
import RapidRebootBlack from "../assets/logos/Partners/RapidRebootBlack.png";
import RiseCircle from "../assets/logos/Partners/RiseCircle.png";
import SaltStickCircle from "../assets/logos/Partners/SaltStickCircle.png";
import Winning_Events from "../assets/logos/Partners/Winning_Events.png";
import ZOS from "../assets/logos/Partners/ZOS.png";


export function AutoScrollCarousel() {
  // Define the logos array
  const logos = [
    bay_st,
    CampSnap,
    CraversCircle,
    GoMacro,
    Grove_Street_bikes,
    Jersey_City_Lagers,
    Knockaround,
    MaskGroup,
    ONRunning,
    RapidRebootBlack,
    RiseCircle,
    SaltStickCircle,
    Winning_Events,
    ZOS,
  ];

  return (
    <div className="carousel-section">
      <h4 className="carousel-title">Partners</h4>
      <div className="carousel-container">
        <div className="carousel">
          {logos.map((logo, index) => (
            <div className="carousel-item" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
          {/* Duplicate items for smooth scrolling */}
          {logos.map((logo, index) => (
            <div  aria-hidden='true' className="carousel-item" key={`duplicate-${index}`}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
