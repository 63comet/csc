import {ThemeProvider, BaseStyles} from '@primer/react' 
import {Header} from './components/Header';
import {AboutMe} from './components/AboutMe';
import {Runinfo} from './components/Runinfo';
import {Yogainfo} from './components/Yogainfo';
import {Slideshow} from './components/Slideshow';
import {Footer} from './components/Footer';
<<<<<<< HEAD
=======
import { AutoScrollCarousel } from './components/AutoScrollCarousel';
>>>>>>> 2f55f3e (Describe your changes here)

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Header/>
        <AboutMe></AboutMe>
        <Runinfo></Runinfo>
        <Yogainfo></Yogainfo>
        <Slideshow></Slideshow>
<<<<<<< HEAD
=======
        <AutoScrollCarousel/>
>>>>>>> 2f55f3e (Describe your changes here)
        <Footer>
        </Footer>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App;
