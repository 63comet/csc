import React, { useState } from "react"; 
<<<<<<< HEAD
import RunImage from "../assets/images/Runimage.png";
=======
import RunImage from "../assets/images/Runimage.JPG";
>>>>>>> 2f55f3e (Describe your changes here)
import DepartedImage from "../assets/images/departed.png"; 
import '../scss/Runinfo.scss';

export function Runinfo() {
    const [imageSrc, setImageSrc] = useState(RunImage); 
    const [imageOpacity, setImageOpacity] = useState(1);
    return (
        <div className='Run-container'>
            <div className='infobox'></div>
            <div className="Run-text">
                <h1>RUN</h1>
                <p>
                    Every Monday at 6:45 PM, meet at Departed Soles in Jersey City 
                    for a group run. All fitness levels are welcome, with walking 
                    pace options and biking available. Come connect and enjoy the fun.
                </p>
                <div className='Location-container'>
                    <h4>Departed Soles</h4>
                    <div className='location-wrapper'>
                        <a 
                            href="https://www.google.com/maps?ll=40.72087,-74.040134&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=9782111646039970650" 
                            target="_blank" 
                            rel="noopener"
                            onMouseEnter={() => {
                                setImageOpacity(0); // Fade out the current image
                                setTimeout(() => {
                                    setImageSrc(DepartedImage); 
                                    setImageOpacity(1); // Immediately prepare for fade-in
                                }, 500); // Change the image source after 1 second
                            }}
                            onMouseLeave={() => {
                                setImageOpacity(0); // Fade out the current image
                                setTimeout(() => {
                                    setImageSrc(RunImage);
                                    setImageOpacity(1); // Fade in the original image
                                }, 500); // Change back to the original image after 1 second
                            }}
                            
                        >
                            Location
                        </a>
                    </div>
                </div>
            </div>
            <img
                className="Runimage"
                src={imageSrc} 
                alt="Run image"
                style={{opacity: imageOpacity}}
            />
        </div>
    );
}
