import SpinImage from "../assets/images/SpinImage.png";
import '../scss/Spin.scss';

export function Spin() {
    return (
        <div className='Spin-container'>
            <div className="Spin-text">
                <h1>SPIN</h1>
                <p>
                Meet at Newport Swim and Fitness in Jersey City
                for an invigorating spin class.All fitness levels are welcome!
                < a href="mailto:chilltownstreetclub@gmail.com" target="_blank" rel="noopener noreferrer">RSVP</a>on whatsapp required.
                </p>
                <div className="Text-Location">
                <div className="Location-info">
                <p>
  <span className="bold-text">Event:</span> Spin class
  <br />
  <span className="bold-text">Time:</span> Time varies
  <br />
  <span className="bold-text">Location Below:</span> Newport Swim and fitness in Jersey City, NJ
</p>
   
                </div>
                </div>
                <div className='Location-container'>
                    <div className='location-wrapper'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.565731156951!2d-74.03488222387423!3d40.72757553666179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c257b9b69124f1%3A0x24f35f581d53d27a!2sNewport%20Swim%20and%20Fitness!5e0!3m2!1sen!2sus!4v1736287061219!5m2!1sen!2sus"
                        style={{ border: 0, width: '100%', height: '15vh' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    </div>
                </div> 
            </div>

            <div className="image-container">
                <img
                    className="SpinImage"
                    src={SpinImage}
                    alt="Spin Image"
                />
            </div>
        </div>
    );
}


