import '../scss/media.scss'
import background from '../assets/images/paper-texture-bg.png'
import { INSTA } from '../assets/data/INSTA'

const RenderInsta = () => {
  return (
    INSTA.map((item, index) => {
      return (
        <img className='insta-image' src={item} alt='instagram image' key={index} />
      )
    })
  )
}

const Media = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className='background media-background'
      >
        <div className='content-container' >
        <p className='section-title'>@weareseaforth</p>
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