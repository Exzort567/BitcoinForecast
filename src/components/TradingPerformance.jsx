import Card from "../UI/Card";
import { performance } from "../data";
import SectionHead from "./SectionHead";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const YouTubeVideo = ({ iframe }) => {
    return <div dangerouslySetInnerHTML={{ __html: iframe }} />;
  };

const TradingPerformance = () => {
  return (
    <section>
      <div className="performance">
        <div className="container performance_container">
          <SectionHead icon={<FaMoneyBillTransfer />} title="MY 2023 TRADING PERFORMANCE" />

          <div className="performance_wrapper">
            {performance.map(({ id, title, img, iframe }) => {
              return (
                <Card className="trading_performance" key={id}>
                  <img src={img} alt={title} />
                  <h4>{title}</h4>
                  
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingPerformance;
