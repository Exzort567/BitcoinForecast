import { Link } from "react-router-dom"
import Logo from '../images/logobtc.png'
import { FaFacebook } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"


const Footer = () => {
    return (
        <footer>
            <div className="container footer_container">
                <article  className="art2">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="Bitcoinforecast Logo" />
                    </Link>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum libero eos accusamus sit natus commodi?
                    </p>
                    <div className="footer_socials">
                        <a href="https://www.facebook.com/BitFor" target="_blank" rel="noreferrer noopener"><FaFacebook/></a>
                        <a href="https://www.youtube.com/@bItcoinnForecast" target="_blank" rel="noreferrer noopener"><FaYoutube/></a>
                    </div>
                </article>
                <article className="art">
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </article>
                <article className="art"> 
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/contact">Contact</Link>
                </article>
                <article className="art">
                    <h4>Get In Touch</h4>
                    <Link to="/contact">Contact Us</Link>
                    
                </article>
            </div>
            <div className="footer_copyright">
                <small>2024 Bitcoin Forecast &copy; </small>
            </div>
        </footer>
  )
}

export default Footer