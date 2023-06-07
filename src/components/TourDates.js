import '../scss/tourdates.scss'
import background from '../assets/images/paper-texture-bg.png'
import backgroundImage from '../assets/images/tourdates-bg.png'
import { TOUR_DATA } from '../assets/data/TOUR_DATES'

const TourData = () => {

  return TOUR_DATA.map((show, index) => {
    return (
      <div className='show-container' key={index} >
        <div className='date-container  font-bold' >
          <p className='font-light' >{show.date}</p>
        </div>
        <div className='show-details-container' >
          <div>
            <p className='font-light' >{show.showInfo}</p>
          </div>
          <div className='show-details-state-tickets'>
            <div className='location'>
              <p className='font-light' >{show.location}</p>
            </div>
            <div className='tickets'>
              <p className='font-light' >{show.tickets}</p>
            </div>
          </div>
        </div>
        <div className='buy-tickets-button-container'>
          <button>tickets</button>
        </div>
      </div>
    )
  })
}

const TourDates = () => {

  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className='background'
      >
        <img src={backgroundImage} className='tourdates-background-image' alt='seaforth' />
        <div className='content-container' >
          <p className='section-title tour-dates-font-color'>tour dates</p>
          <div className='schedule-container' >
            <TourData />
          </div>
          <div className='view-more-container'>
            <button>
              <span className='font-medium '>
                view more
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourDates