import { useState } from 'react'
import '../scss/music.scss'
import albumCover from '../assets/images/good-beer-cover.png'
import playerAlbumCover from '../assets/images/good-beer-cover-player.png'
import musicApp from '../assets/images/music-app.png'
import leftArrow from '../assets/images/arrow-left.png'
import rightArrow from '../assets/images/arrow-right.png'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { ICONS } from '../assets/data/ICONS'

const DATA = ['song1', 'song2', 'song3']

const RenderIcons = () => {

  const handleSocialClick = (searchQuery) => {
    console.log('url')
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
  }

  return ICONS.map((social, index) => {
    const { icon, alt } = social
    return (
      <div onClick={() => handleSocialClick(alt)} className='social-icon' key={index}>
        <img src={icon} alt={alt} />
      </div>
    )
  })
}

const RenderCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrevSlide = () => {
    const prevSlide = (currentSlide - 1 + DATA.length) % DATA.length
    setCurrentSlide(prevSlide)
  }

  const handleNextSlide = () => {
    const nextSlide = (currentSlide + 1) % DATA.length
    setCurrentSlide(nextSlide)
  }

  const renderMusicData = () => {

    return DATA.map((song, index) => {
      return (
        <div className='selected-music-content-container' key={index}>
          <div className='album-cover-container'>
            <img src={albumCover} className='album-cover' alt='Goodbeer album cover' />
          </div>
          <div className='player-social-container'>
            <div className='player-container'>
              <img src={musicApp} className='player' alt={song} />
            </div>
            <div className='player-album-cover-container'>
              <img src={playerAlbumCover} className='player-album-cover' alt='Good Beer' />
            </div>
            <div className='music-social-icons'>
              <RenderIcons />
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <img src={leftArrow} className='arrow' alt='Previous Slide' onClick={handlePrevSlide} />
      <Carousel
        set showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
      >
        {renderMusicData()}
      </Carousel>
      <img src={rightArrow} className='arrow' alt='Next Slide' onClick={handleNextSlide} />
    </>
  )
}

const Music = ({ id }) => {

  return (
    <>
      <div className='music-background-color background' id={id} >
        <div className='content-container' >
          <p className='section-title'>music</p>
          <div className='music-content-container' >
            <RenderCarousel />
          </div>
        </div>
      </div>
    </>
  )
}

export default Music