import Header from '../../components/Header'
import HeaderImage from '../../images/bg1.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import './contact.css'


const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
     Have a question, feedback, or just want to say hello? We'd love to hear from you!
     Feel free to reach out to us via the following channels:
    </Header>
    <section className='contact'>
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="https://t.me/AstraderSnipe" target='_blank' rel='noreferrer noopen'><FaTelegram/></a>
          <a href="https://www.facebook.com/BitFor" target='_blank' rel='noreferrer noopen'><FaFacebookF/></a>
          <a href="mailto:bitcoinforecastt@gmail.com" target='_blank' rel='noreferrer noopen'><IoMdMail/></a>
          <a href="https://www.instagram.com/astradersnipe/" target='_blank' rel='noreferrer noopen'><FaInstagram/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact