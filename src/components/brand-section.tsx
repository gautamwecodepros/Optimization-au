import "../components/brand-section.css";
import aloha from "../assets/aloha.png";
import athele from "../assets/athlete.png";
import walmark from "../assets/walmark.png";
import next from "../assets/nextimg.png";
import pilot from "../assets/pilot.png";
const BrandSection = () => {
  return (
    <section id="MainContainer">
      {/* Branding companies logo */}
      <div id="BrandingCompanies">
        <p>
          Trusted on over <span>1 million</span> websites in over{" "}
          <span>190 countries.</span>
        </p>
        <div id="BrandIconContainer">
          <img src={next} alt="" />
          <img src={aloha} alt="" />
          <img src={athele} alt="" />
          <img src={walmark} alt="" />
          <img src={next} alt="" />
          <img src={pilot} alt="" />
          <img src={aloha} alt="" />
        </div>
      </div>

      {/* Brand section last block */}
      <div id="lastBrandingSectionBlock">
        <h1>
          Trusted <span>Optimization</span> Tool <br />
          by the Happy Users <span className="emoji"></span>
        </h1>

        <p className="last-desc">
          We’re not just another tech company — we’re a brand licensing and
          optimization network. Our platform is designed to evolve with you:
          flexible enough to handle dozens of websites, yet simple enough to
          manage without a tech team.
        </p>

        <div className="stats-row">
          <div className="stat-box">
            <h2>50+</h2>
            <p>Premium Domains</p>
          </div>

          <div className="stat-box">
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat-box">
            <h2>100%</h2>
            <p>Authority Coverage</p>
          </div>

          <div className="stat-box">
            <h2>24/7</h2>
            <p>Support Access</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BrandSection;
