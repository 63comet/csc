import slideshow1 from "../assets/images/slideshow1.png";
import slideshow2 from "../assets/images/slideshow2.png";
import slideshow4 from "../assets/images/slideshow4.png";
import slideshow5 from "../assets/images/slideshow5.png";
import slideshow6 from "../assets/images/slideshow6.png";
import slideshow7 from "../assets/images/slideshow7.png";
import slideshow8 from "../assets/images/slideshow8.png";
import slideshow3 from "../assets/images/slideshow3.png";
import yogaphoto from "../assets/images/yogaphoto.jpg";
import yogaphoto2 from "../assets/images/yogaphoto2.jpg";
import '../scss/Slideshow.scss';
import React, { useEffect } from "react";

export function Slideshow() {
  useEffect(() => {
    // Dynamically add the script to the document
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);

    // Cleanup: remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="Slideshow-row">
      <behold-widget feed-id="yPrI3ycyw7eSM2jQrwXm"></behold-widget>
    </div>
    
    );
  }
  
{/*     
            <div className="Slideshow-container">
                <div className="photos">
                    <img className="photo" src={slideshow1} alt="Slideshow 1" />
                </div>
                <div className="photos">
                    <img className="photo" src={slideshow3} alt="Slideshow 3" />
                </div>
                <div className= "photos">
                    <img className="photo" src={slideshow8} alt="=Slideshow 8"/>
                </div>
            </div>

            
            <div className="Slideshow-container">
                <div className="photos">
                    <img className="photo" src={yogaphoto2} alt="yogaphoto2" />
                </div>
                <div className="photos">
                    <img className="photo" src={slideshow7} alt="Slideshow 7" />
                </div>
                <div className="photos">
                    <img className="photo" src={slideshow6} alt="Slideshow 6">
                    </img>
                </div>
            </div>

            
            <div className="Slideshow-container">
                <div className="photos">
                    <img className="photo" src={slideshow4} alt="Slideshow 4" />
                </div>
                <div className="photos">
                    <img className="photo" src={slideshow5} alt="Slideshow 5" />
                </div>
                <div className="photos" >
                    <img className="photo" style={{height: '49.4vw'}} src={yogaphoto} alt="yogaphoto" />
                </div>
            </div> */}

