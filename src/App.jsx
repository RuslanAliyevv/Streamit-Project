import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/header';
import Slider from "./components/bannerslider/slider"
import Resume from './components/resume/resume';
import WatchMovie from './components/watchmovie/watchmovie';

function App() {

  return (
    <>
     <div>
      <Header />
      <Slider />
      <Resume />
      <WatchMovie />
     </div>
    </>
  )
}

export default App
