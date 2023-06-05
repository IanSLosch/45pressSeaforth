import background from '../assets/images/paper-texture-bg.png'


const Media = () => {
// needs custom classes for background and content container
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className='background'
      >
        <div className="media-background-overlay">
          <div className='content-container' >
            <h3 className='font-regular section-title'>tour dates</h3>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media