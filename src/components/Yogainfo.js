import yogaphoto from "../assets/images/yogaphoto.jpg";
import yogaphoto2 from '../assets/images/yogaphoto2.jpg';
import yogaphoto3 from '../assets/images/yogaphoto3.jpg'
import '../scss/Yogainfo.scss'


export function Yogainfo() {
    return (
        <div className= 'Yoga-container'>
            <div className='infobox'>
            </div>
            <img 
            className="yogaphoto"
            src={yogaphoto3}
            alt="yoga photo">
            </img>
            <div className="Yoga-text">
            <h1>YOGA</h1>
            <p>
            Ease into your weekend every Friday
            at 8:00 AM with a calming yoga session 
            located at Dixon Mills. Ideal for 
            unwinding after a busy week of running 
            or gearing up for a weekend run or bike 
            ride. All levels welcome. 
            </p>
            <div className='Location-container'>
            <a href="https://www.google.com/maps/place/341+Monmouth+St,+Jersey+City,+NJ+07302/@40.721358,-74.050008,1289m/data=!3m1!1e3!4m6!3m5!1s0x89c250b4482bb7a5:0x3e630e789958ae0d!8m2!3d40.7213576!4d-74.0500781!16s%2Fg%2F11c5kzn93j?hl=en-US&entry=ttu" target="_blank" rel="noopener">
            LOCATION</a>
            </div>
            </div>
            </div>
        


    );
}