import React, { useState } from "react"; 
import RunImage from "../assets/images/Runimage.jpg";
import DepartedImage from "../assets/images/departed.png"; 
import '../scss/Runinfo.scss';

export function Runinfo() {
    const [imageSrc, setImageSrc] = useState(RunImage); 
    const [imageOpacity, setImageOpacity] = useState(1);
    return (
        <div className='Run-container'>
            <div className="Run-text">
                <h1>RUN</h1>
                <p>
                    Every Monday at 6:45 PM, meet at Departed Soles in Jersey City 
                    for a group run. All fitness levels are welcome, with walking 
                    pace options and biking available. Come connect and enjoy the fun.
                </p>
                <div className='Location-container'>
                    <div className='location-wrapper'>
                    <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6047.7407473771!2d-74.040134!3d40.72087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250ada149a34f%3A0x87c10ab6d76c935a!2sDeparted%20Soles%20Brewing%20Company!5e0!3m2!1sen!2sus!4v1736286412155!5m2!1sen!2sus"
                style={{ border: 0, width: '100%', height: '15vh' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
                    </div>
                </div>
            </div>

            <div className="=Runimage">
            <img
                className="Runimage"
                src={imageSrc} 
                alt="Run image"
                style={{opacity: imageOpacity}}
                />
            </div>
    </div>
    );
}

