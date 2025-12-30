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
import PopularMovies from './components/popularmovies/popularmovies';
import SeasonSlider from './components/seasonslider/seasonslider';
import MovieGeners from './components/moviegeners/moviegeners';
import Recommended from './components/recommended/recommended';
import Footer from './components/Footer/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './pages/blogs/page';


function App() {

  return (
    <>
     <div>
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
      <Header />
      <Slider />
      <Resume />
      <WatchMovie />
      <OnlyStream />
      <PicksForYou />
      <UpComing />
      <HeroSlider />
      <Personality />
      <PopularMovies />
      <SeasonSlider />
      <MovieGeners />
      <Recommended />
      <Footer />
     </div>
    </>
  )
}

export default App
