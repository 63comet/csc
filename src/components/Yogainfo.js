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
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6047.696409036165!2d-74.050008!3d40.721358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b4482bb7a5%3A0x3e630e789958ae0d!2s341%20Monmouth%20St%2C%20Jersey%20City%2C%20NJ%2007302!5e0!3m2!1sen!2sus!4v1736286695815!5m2!1sen!2sus"
                style={{ border: 0, width: '60vw', height: '15vh' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            </div>
            </div>
        


    );
}