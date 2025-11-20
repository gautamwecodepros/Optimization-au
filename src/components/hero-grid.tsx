import "./hero-grid.css";
import middleimg from "../assets/gridMiddleImg.png";
import bottom from "../assets/gridBotomlast.png";
import user1 from "../assets/user-1.png"
import user2 from "../assets/user-2.png"
import user3 from "../assets/user-3.png"
import plus from "../assets/plus.png"
import leftBottom from "../assets/bottom-img.png"
import userIcon from "../assets/user-icon.png"


export default function HeroGrid() {
  return (
    <div className="wrapper">
      {/* Left Column */}
      <div className="left-box">
        <div className="left-top">
          <div className="customer-stats">
            <p><b style={{ color: "black" }}>432,800</b> Customers use our AI writer world-wide</p>
          </div>
          <div className="user-box">
            <div className="user-circle "><img src={user1} alt="user" /></div>
            <div className="user-circle "><img src={user2} alt="user" /></div>
            <div className="user-circle "><img src={user3} alt="user" /></div>
            <div className="user-circle "><img src={plus} alt="plus" /></div>
          </div>
        </div>

        <div className="left-bottom">
          <div id="absoluteDiv">
            <img src={userIcon} alt="" style={{ backgroundColor: " #4380FC", padding: "8px", borderRadius: "15px" }} />
            <div><h1 style={{ fontWeight: 600, fontSize: "11px", }}>New Clients <br />321</h1></div></div>
          <img src={leftBottom} alt="" style={{ color: "white" }} />
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