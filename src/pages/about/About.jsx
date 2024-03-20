import Header from '../../components/Header'
import './about.css'
import HeaderImage from '../../images/chart.jpg'
import ApproachImage from '../../images/astro2.png'
import MentorImage from '../../images/mentor1.png'
import PrivateImage from '../../images/private.jpg'


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
    <section className="about_engagement">
      <div className="about_engagement-container">
        
          <div className="about_section-content">
            <h1>Community Engagement</h1>
            <p>
            Our commitment to fostering a community of knowledgeable cryptocurrency enthusiasts is at the heart of BitcoinForecast. Through our private Facebook group, members gain exclusive access to our predictions, discussions, and insights. This platform serves as a hub for sharing ideas, learning from each other, and staying ahead in the ever-evolving landscape of digital assets.
            </p>
        </div>
        <div className="about_section-img">
          <img src="https://cdn.pixabay.com/photo/2022/10/04/22/43/crowd-7499209_1280.png" alt="Community Engagement Image" />
        </div>
      </div>
    </section>
    <section className="about_education">
      <div className="about_education-container">
        <div className="about_section-img">
          <img src={MentorImage} alt="Empowering Education Image" />
        </div>
        <div className="about_section-content">
          <h1>Empowering Education</h1>
          <p>
          Beyond predictions, BitcoinForecast is dedicated to empowering individuals with the knowledge and skills to navigate the cryptocurrency market confidently. Through our free mentorship sessions on YouTube, we provide accessible guidance and educational resources. Whether you're a seasoned trader or just starting your journey in crypto, our mentorship program offers valuable insights to help you make informed decisions and achieve your financial goals.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
