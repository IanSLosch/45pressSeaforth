import '../scss/media.scss'
import background from '../assets/images/paper-texture-bg.png'
import { INSTA } from '../assets/data/INSTA'

const handleInstaClick = (id) => {
  console.log(`You have selected to view image ${id} on Instagram`)
  window.location.href = 'https://www.instagram.com/weareseaforth/?hl=en';
}

const RenderInsta = () => {
  return (
    INSTA.map((item, index) => {
      return (
        <img onClick={() => handleInstaClick(index)} className='insta-image' src={item} alt='instagram' key={index} />
      )
    })
  )
}

const Media = ({ id }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className='background media-background'
        id={id} 
      >
        <div className='content-container' >
          <p className='media-section-title font-regular'>@weareseaforth</p>
          <div className='media-content-container' >
            <div className='image-layout'>
              <RenderInsta />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Media