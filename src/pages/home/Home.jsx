import FAQs from '../../components/FAQs'
import MainHeader from '../../components/MainHeader'
import PrivateGroupBenefits from '../../components/PrivateGroupBenefits'
import TradingPerformance from '../../components/TradingPerformance'
import './home.css'

const Home = () => {
  return (
    <>
    <MainHeader/>
    <PrivateGroupBenefits/>
    <TradingPerformance/>
    <FAQs/>
    </>
  )
}

export default Home