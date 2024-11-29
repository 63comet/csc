import slideshow1 from "../assets/images/slideshow1.png";
import slideshow2 from "../assets/images/slideshow2.png";
import slideshow4 from "../assets/images/slideshow4.png";
import slideshow5 from "../assets/images/slideshow5.png";
import slideshow6 from "../assets/images/slideshow6.png";
import slideshow7 from "../assets/images/slideshow7.png";
import slideshow8 from "../assets/images/slideshow8.png";


import '../scss/Slideshow.scss';

export function Slideshow() {
    return (
        <div className='Slideshow-row'> 
            <div className='Slideshow-container'>
                <div className='photos'>
                    <img
                        className='photo'
                        src={slideshow1}
                        alt="Slideshow 1"
                    />
                </div>
            <div className='Slideshow8-container'>
                <div className='slideshow8-container'>
                    <div className='photos'>
                        <img
                        className='photo'
                        src={slideshow8}
                        alt="slideshow 8"
                        />
                    </div>
                </div>
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
                <div className= 'slideshow2-container'>
                <div className='photo'>
                    <img
                    className='photo'
                    src={slideshow7}
                    alt="slideshow7">
                        
                    </img>
                </div>
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
                <div className='Slideshow2-container'>
                <div className='photos'>
                    <img
                        className='photo'
                        src={slideshow4}
                        alt="Slideshow 4"
                        />

            </div>
            <div className= 'slideshow5-container'>
                <div className= 'photo'>
                    <img
                    className='photo'
                    src={slideshow5}
                    alt="slideshow 5">

                    </img>
                </div>
            <div className= 'slideshow2-container'>
                <div className='photo'>
                    <img 
                    className='photo'
                    src={slideshow6}
                    alt="slideshow 6">

                    </img>
                </div>
            
            </div>
            </div>  
            </div>
        </div>
    );
}
