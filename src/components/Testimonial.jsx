import { useState } from "react"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle } from 'react-icons/io'
import { testimonials } from "../data"



const Testimonial = () => {
    const [index, setIndex] = useState(0)
    const {name,testimony,membership,profile} = testimonials[index]
    const prevTestimonyHandler = () => {
        setIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };
    
    const nextTestimonyHandler = () => {
        setIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };
  return (
    <section className="testimonials">
        <div className="container testomonials_container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonial_head"/>
            <Card className="testimonial">
                <div className="testimonial_profile">
                    <img src={profile} alt="Profile" />
                </div>
                <p className="testimony">
                    {`"${testimony}"`}
                </p>
                <h5>{name}</h5>
                <small className="user_membership">
                    {membership}
                </small>
            </Card>
            <div className="testimonials_btn-container">
                <button className="testimonials_btn" onClick={prevTestimonyHandler}><IoIosArrowDropleftCircle/></button>
                <button className="testimonials_btn"onClick={nextTestimonyHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonial