import { useState } from 'react'
import '../scss/videos.scss'
import leftArrow from '../assets/images/arrow-left.png'
import rightArrow from '../assets/images/arrow-right.png'
import fetchVideoData from '../assets/images/blackbox.png'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const videoDATA = [0, 1, 2, 3]
const DATA = [0, 1, 2, 3]

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

  const handleVideoClick = (id) => {
    console.log(`Your are watching video ${id}`)
    window.location.href = 'https://www.youtube.com/channel/UCvBrvVkWsO6PeWr56JQe-Vw';
  }

  const RenderVideos = () => {

    return videoDATA.map((data) => {
      return (
        <div onClick={() => handleVideoClick(data)} className='video-wrapper' key={data} >
          <img src={fetchVideoData} className='embedded-video' alt='video' />
        </div>
      )
    })
  }

  const RenderSlideData = () => {

    return DATA.map((slide) => {
      return (
        <RenderVideos key={slide} />
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
        {RenderSlideData()}
      </Carousel>
      <img src={rightArrow} className='arrow' alt='Next Slide' onClick={handleNextSlide} />
    </>
  )
}

const Videos = () => {

  return (
    <div>
      <div className='videos-background-color background'>
        <div className='content-container' >
          <p className='section-title videos-title'>videos</p>
          <div className='video-content-container' >
            <div className='selected-video-content-container'>
              <RenderCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videos