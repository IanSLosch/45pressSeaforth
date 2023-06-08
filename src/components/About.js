import '../scss/about.scss'
import backgroundImage from '../assets/images/about-bg.png'
import seaforth from '../assets/images/seaforth-black.png'

const About = () => {

  return (
    <div>
      <div className='about-background' >
        <div className='read-more-button-container'>
          <button>
            <span>read more</span>
          </button>
        </div>
        <div className="read-more-button-overlay" onClick={() => alert('You are now reading more...')}>
          <p>read more</p>
        </div>
        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className='about-background-overlay'
        >
          <div className='about-content-container' >
            <div className='about-title'>
              <p className='section-title about-header-text'>about</p>
              <img src={seaforth} alt='seaforth' />
            </div>
            <div className='about-story'>
              <p className='font-light'>In just a few short years, lifelong friends Tom Jordan and Mitch Thompson have created an unmistakable sound evoking the laidback, summery spirit of their Australian hometown. It was there, in Sydney, New South Wales, where they formed country band Seaforth, naming it after their native suburb north of the city.<br /><br />Today, with 40 million on-demand streams and their latest release “Everything Falls for You,” Seaforth is continuing to evolve their authentic, progressive approach to country music.<br /><br />“For us, coming from Australia and loving country music, we’ve always wanted to be trying new things,” says Jordan. "I think it’s always important to push ourselves musically in order to keep our sound fresh. We just have more fun that way, too.”<br /><br />As he says, the duo never shies away from a challenge, even if it means relocating 9,000 miles from Seaforth to Nashville, Tennessee or shaking things up in the studio just when things feel safe. Through sheer hard work and exacting effort, Jordan and Thompson have manifested many of their wildest dreams down to a tee, from working with legendary super-producer Dann Huff to opening for their longtime hero, Keith Urban.<br /><br />Accomplishments aside, Jordan and Thompson’s friendship has always been the driving force of their work. They first met in preschool, at three years old, and later came of age as classmates with a shared love of guitar and classic rock. Encouraged by his parents, Jordan began playing the instrument at age nine and quickly knew he wanted to pursue music. Similarly, Thompson committed to a career as an artist at a young age...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About