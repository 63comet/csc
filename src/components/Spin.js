import SpinImage from "../assets/images/SpinImage.png";
import '../scss/Spin.scss';

export function Spin() {
    return (
        <div className='Spin-container'>
            <div className="Spin-text">
                <h1>SPIN</h1>
                <p>
                Wednesdays and Thursdays, meet at Newport Swim and Fitness in Jersey City
                for an invigorating spin class. All fitness levels are welcome, with options 
                for beginners and advanced riders alike. Come connect, challenge yourself,
                and enjoy the ride!


                </p>
                <div className='Location-container'>
                    <div className='location-wrapper'>
                        <a 
                            href="https://www.google.com/maps/place/Newport+Swim+and+Fitness/@40.7275715,-74.0348822,805m/data=!3m2!1e3!4b1!4m20!1m13!4m12!1m4!2m2!1d-74.0182606!2d40.769975!4e1!1m6!1m2!1s0x89c257b9b69124f1:0x24f35f581d53d27a!2sNewport+Swim+and+Fitness,+33+River+Dr+S,+Jersey+City,+NJ+07310!2m2!1d-74.0322153!2d40.7275642!3m5!1s0x89c257b9b69124f1:0x24f35f581d53d27a!8m2!3d40.7275715!4d-74.0323073!16s%2Fg%2F11t6hl9jhl?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D" 
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


