import "./hero-section.css";
import Navbar from "./navbar";
import arrow from "../assets/arrow-up-right.png";
import blueArrow from "../assets/blue-arrow.png";
import tickBox from "../assets/tick-box.png";
import HeroGrid from "./hero-grid";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero-text">
        <p className="hero-text-btn1">Brand Physics & IP Licensing</p>
        <div className="hero-heading">
          <h1>Structure First. Results Inevitable.</h1>
        </div>
        <div className="hero-desc">
          <p>
            Premium domain portfolio. Expert brand optimization. Systematic
            training protocols. Build unstoppable online brands with Australia's
            authority domains.
          </p>
        </div>
        <div className="hero-btns">
          <button className="check-hero-btn">
            Check Your Brand Healths{" "}
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
          <button className="explore-hero-btn">
            Explore Domains{" "}
            <span>
              <img src={blueArrow} alt="" />
            </span>
          </button>
        </div>
        <div className="feature-badges">
          <div className="feature-text">
            <img src={tickBox} alt="tickbox" /> <span>No Credit Card</span>
          </div>
          <div className="feature-text">
            <img src={tickBox} alt="tickbox" /> <span>Free Updates</span>
          </div>
          <div className="feature-text">
            <img src={tickBox} alt="tickbox" /> <span>Premium Support</span>
          </div>
        </div>
      </div>
      <HeroGrid />
    </section>
  );
};

export default HeroSection;
