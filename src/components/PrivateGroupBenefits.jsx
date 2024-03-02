import { BsFillMoonStarsFill } from "react-icons/bs";
import SectionHead from "./SectionHead";
import { benefits } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

const PrivateGroupBenefits = () => {
  return (
    <section className="benefits">
        <div className="container benefits_container">
            <SectionHead icon={<BsFillMoonStarsFill/>} title="PRIVATE GROUP BENEFITS"/>    
        <div className="benefits_wrapper">
            {
                benefits.map(({id, title, img}) => {
                    return (
                        <Card className="program_benefits" key={id}>
                            <img src={img} alt={title} />
                            <h4 className="benefit_title">{title}</h4>
                            
                            
                        </Card>
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}

export default PrivateGroupBenefits

