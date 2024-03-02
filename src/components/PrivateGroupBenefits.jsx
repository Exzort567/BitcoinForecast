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
                            <h4>{title}</h4>
                            <img src={img} alt={title} />
                            
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