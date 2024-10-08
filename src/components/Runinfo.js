import RunImage from "../assets/images/Runimage.png";
import '../scss/Runinfo.scss'

export function Runinfo() {
    return (
        <div className='Run-container'>
            <div className= 'infobox'>
            </div>  
        <div className="Run-text">
            <h1>RUN</h1>
            <p>
            Every Monday at 6:45 PM, meet
            at Departed Soles in Jersey City 
            for a group run. All fitness levels
            are welcome, with walking pace options 
            and biking available. Come connect and 
            enjoy the fun.
            </p>
            <div className='Location-container'>
            <h4>Departed Soles</h4>
            <a href="https://www.google.com/maps?ll=40.72087,-74.040134&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=9782111646039970650" target="_blank" rel="noopener">Location</a>
            </div>
            </div>
            <img
                className="Runimage"
                src={RunImage} 
                alt="Run image"
            />
        </div>
    );
}