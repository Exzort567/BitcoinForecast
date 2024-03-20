import Header from '../../components/Header'
import './about.css'
import HeaderImage from '../../images/chart.jpg'
import ApproachImage from '../../images/astro.jpg'


const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    BitcoinForecast is a pioneering private group that leverages astrology and technical analysis to provide unique insights into cryptocurrency markets. With exclusive predictions delivered through our private Facebook group and free mentorship offered on our YouTube channel, we're dedicated to empowering our community with knowledge and strategic guidance in the dynamic world of Bitcoin. Join us as we navigate the complexities of digital assets together.
    </Header>
    <section className="about_approach">
      <div className="about_approach-container">
        <div className="about_section-img">
          <img src={ApproachImage} alt="Our Approach Image" />
        </div>
        <div className="about_section-content">
          <h1>Our Approach</h1>
          <p>
          At BitcoinForecast, we believe in harnessing diverse methodologies to provide insightful predictions in the volatile world of cryptocurrency. Our unique blend of astrology, technical analysis, and strategic insights sets us apart in the field of forecasting. By combining these unconventional approaches with traditional methods, we aim to offer our members a comprehensive understanding of Bitcoin market trends.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About