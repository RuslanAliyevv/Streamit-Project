import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/header';
import Slider from "./components/bannerslider/slider"
import Resume from './components/resume/resume';
import WatchMovie from './components/watchmovie/watchmovie';
import OnlyStream from './components/onlystreamit/onlystreamit';
import PicksForYou from './components/picksforyou/picksforyou';
import UpComing from './components/upcoming/upcoming';
import HeroSlider from './components/streamingslider/streamslider';
import Personality from './components/personality/personality';

function App() {

  return (
    <>
     <div>
      <Header />
      <Slider />
      <Resume />
      <WatchMovie />
      <OnlyStream />
      <PicksForYou />
      <UpComing />
      <HeroSlider />
      <Personality />
     </div>
    </>
  )
}

export default App
