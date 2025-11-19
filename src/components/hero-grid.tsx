import "./hero-grid.css";
import middleimg from "../assets/gridMiddleImg.png";
import bottom from "../assets/gridBotomlast.png";

export default function HeroGrid() {
  return (
    <div className="wrapper">
      {/* Left Column */}
      <div className="left-box">
        <div className="left-top">
          <div className="customer-stats">
            <h1>432,800</h1>
            <p>Customers use our AI writer world-wide</p>
          </div>
        </div>

        <div className="left-bottom">
          <div className="authority-scanner">
            <h2>Authority Scanner</h2>
            <div className="authority-overview">
              <div className="owner-activity">
                <div className="activity-status">
                  <div className="status-dot"></div>
                  <span>Owner Activity Scan</span>
                </div>
                <span>Strong Credibility</span>
              </div>
              <a href="#" className="unlock-link">
                Unlock full view... based on / and right
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Box */}
      <div className="middle-box">
        <img src={middleimg} alt="" />
      </div>

      {/* Right Column */}
      <div className="right-column">
        <div className="right-box top">
          <div className="daily-traffic">
            <h3>Daily Traffic</h3>
            <div className="traffic-value">65,320</div>
            <div className="chart-container">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>

        <div className="right-box bottom">
          <img src={bottom} alt="" />
        </div>
      </div>
    </div>
  );
}
