import '../scss/videos.scss'
import leftArrow from '../assets/images/arrow-left.png'
import rightArrow from '../assets/images/arrow-right.png'
import fetchVideoData from '../assets/images/blackbox.png'

const videoData = [0, 1, 2, 3]

const RenderVideos = () => {
  return videoData.map((data) => {
    return (
      <img src={fetchVideoData} className='embedded-video' key={data} alt='video' />
    )
  })
}

const Videos = () => {

  return (
    <div>
      <div className='videos-background-color background'>
        <div className='content-container' >
          <h3 className='section-title videos-title'>videos</h3>
          <div className='video-content-container' >
            <img src={leftArrow} className='left-arrow' alt='arrow left' />
            <div className='selected-video-content-container'>
              <RenderVideos />
            </div>
            <img src={rightArrow} className='right-arrow' alt='arrow right' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videos