import './scss/app.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import Music from "./components/Music"
import TourDates from "./components/TourDates"
import Videos from "./components/Videos"
import About from "./components/About"
import Media from "./components/Media"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Music id='music' />
      <TourDates id='tourdates' />
      <Videos id='videos' />
      <About id='about' />
      <Media id='media' />
    </>
  );
}

export default App;
