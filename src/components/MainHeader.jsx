import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="contaier main_header-container">
        <div className="main_header-left">
          <h4>Don't Just Witness - Be Part of the</h4>
          <h1>
            <span className="bitcoin">BITCOIN</span> <span className="forecast">FORECAST!</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus, repudiandae quidem enim rerum unde.</p>
          <Link to="/plans" className="btn lg">Join Now!</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-video">
            <iframe
              title="Must watch"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/LvkyIfr1buU?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Fbitcoinforecastt.systeme.io&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
