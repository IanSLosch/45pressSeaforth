import '../scss/tourdates.scss'
import background from '../assets/images/paper-texture-bg.png'
import backgroundImage from '../assets/images/tourdates-bg.png'
import { TOUR_DATA } from '../assets/data/TOUR_DATES'

const ticketmasterUrl = () => {
  window.location.href = 'https://www.ticketmaster.com/seaforth-tickets/artist/2200501';
}

const TourData = () => {

  return TOUR_DATA.map((show, index) => {
    const { date, showInfo, location } = show

    return (
      <div className='show-container' key={index} >
        <div className='date-container  font-bold' >
          <p className='font-light' >{date}</p>
        </div>
        <div className='show-details-container' >
          <div>
            <p className='font-light' >{showInfo}</p>
          </div>
          <div className='show-details-state-tickets'>
            <div className='location'>
              <p className='font-light' >{location}</p>
            </div>
          </div>
        </div>
        <div className='buy-tickets-button-container'>
          <button onClick={() => alert(`You have purchased: ${showInfo} tickets in ${location} for ${date}.`)}>
            <span className='font-regular'>
              tickets
            </span>
          </button>
        </div>
      </div>
    )
  })
}

const TourDates = ({ id }) => {

  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className='background'
        id={id} 
      >
        <img src={backgroundImage} className='tourdates-background-image' alt='seaforth' />
        <div className='content-container' >
          <p className='section-title tour-dates-font'>tour dates</p>
          <div className='schedule-container' >
            <TourData />
          </div>
          <div className='view-more-container'>
            <button onClick={ticketmasterUrl}>
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