import SpinImage from "../assets/images/SpinImage.png";
import '../scss/Spin.scss';

export function Spin() {
    return (
        <div className='Spin-container'>
            <div className="Spin-text">
                <h1>SPIN</h1>
                <p>
                    Every Monday at 6:45 PM, meet at Departed Soles in Jersey City 
                    for a group run. All fitness levels are welcome, with walking 
                    pace options and biking available. Come connect and enjoy the fun.
                </p>
                <div className='Location-container'>
                    <div className='location-wrapper'>
                        <a 
                            href="https://www.google.com/maps?ll=40.72087,-74.040134&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=9782111646039970650" 
                            target="_blank" 
                            rel="noopener"
                        >
                            LOCATION
                        </a>
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


