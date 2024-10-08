import {ThemeProvider, BaseStyles} from '@primer/react' 
import {Header} from './components/Header';
import {AboutMe} from './components/AboutMe';
import {Runinfo} from './components/Runinfo';
import {Yogainfo} from './components/Yogainfo';
import {Slideshow} from './components/Slideshow';
import {Footer} from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Header/>
        <AboutMe></AboutMe>
        <Runinfo></Runinfo>
        <Yogainfo></Yogainfo>
        <Slideshow></Slideshow>
        <Footer>
        </Footer>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App;
