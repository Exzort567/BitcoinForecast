import Header from '../../components/Header'
import HeaderImage from '../../images/bg3.jpg'
import Card from '../../UI/Card'
import { plans } from '../../data'
import Payment from '../../images/payment.jpg'
import './plan.css'

const Plans = () => {
  return (
    <>
    <Header title="Membership Plans" image={HeaderImage}>
    SEND YOUR PROOF OF PAYMENT HERE: bitcoinforecastt@gmail.com
    <br />
    <a href="https://youtu.be/vOcu_dYPwgQ" target='_blank'>For more information</a>
    </Header>
    <section className='plans'>
      <div className="container plans_container">
        {
          plans.map(({id, name, desc, price, features}) => {
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{price}</h1>
              <h4>Features</h4>
              {
                features.map(({feature}, index) => {
                  return <p key={index}>{feature}</p>
                })
              }
            </Card>
          })
        }
        <div className="payment-container">
          <img src={Payment} alt="Payment method" className="payment-image" />
        </div>
      </div>
    </section>
    </>
  ) 
}

export default Plans