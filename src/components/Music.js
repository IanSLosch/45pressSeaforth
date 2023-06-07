import '../scss/music.scss'
import albumCover from '../assets/images/good-beer-cover.png'
import playerAlbumCover from '../assets/images/good-beer-cover-player.png'
import musicSocialIcons from '../assets/images/music-social-icons.png'
import musicApp from '../assets/images/music-app.png'
import leftArrow from '../assets/images/arrow-left.png'
import rightArrow from '../assets/images/arrow-right.png'

const Music = () => {

  return (
    <div>
      <div className='music-background-color background' >
        <div className='content-container' >
          <p className='section-title'>music</p>
          <div className='music-content-container' >
            <img src={leftArrow} className='left-arrow' alt='arrow left' />
            <div className='selected-music-content-container'>
              <div className='album-cover-container'>
                <img src={albumCover} className='album-cover' alt='Goodbeer album cover' />
              </div>
              <div className='player-social-container'>
                <div className='player-container'>
                  <img src={musicApp} className='player' alt='mp3 controls' />
                </div>
                <div className='player-album-cover-container'>
                  <img src={playerAlbumCover} className='player-album-cover' alt='arrow left' />
                </div>
                <img src={musicSocialIcons} className='music-social-icons' alt='arrow left' />
              </div>
            </div>
            <img src={rightArrow} className='right-arrow' alt='arrow right' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music