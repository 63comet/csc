import slideshow1 from "../assets/images/slideshow1.png";
import slideshow2 from "../assets/images/slideshow2.png";
import slideshow4 from "../assets/images/slideshow4.png";
import '../scss/Slideshow.scss';

export function Slideshow() {
    return (
        <div className='Slideshow-row'> {/* Added row class here */}
            <div className='Slideshow-container'>
                <div className='photos'>
                    <img
                        className='photo'
                        src={slideshow1}
                        alt="Slideshow 1"
                    />
                </div>
            </div>
            <div className='Slideshow2-container'>
                <div className='photos'>
                    <img
                        className='photo'
                        src={slideshow2}
                        alt="Slideshow 2"
                    />
                </div>
            </div>
            <div className='Slideshow4-container'>
                <div className='photos'>
                    <img
                        className='photo'
                        src={slideshow4}
                        alt="Slideshow 4"
                    />
                </div>
            </div>
        </div>
    );
}
