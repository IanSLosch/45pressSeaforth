import '../scss/hero.scss'
import mainBanner from '../assets/images/Layer19.png'
import background from '../assets/images/hero.png'

const Hero = () => {

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className='background'
    >
      <div className='content-container' >
        <img src={mainBanner} className='main-banner' alt='Main Banner' />
      </div>
    </div>
  )
}

export default Hero