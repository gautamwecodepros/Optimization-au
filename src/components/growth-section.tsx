import "./growthsection.css";
import rightImage from "../assets/growth-img.png";

const GrowthSection = () => {
  return (
    <section className="growth-section">
      <div className="growth-container">
        <div className="growth-left">
          <h2>
            Built for <span className="blue-text">Growth.</span> <br />
            Designed for Simplicity.
          </h2>

          <p className="growth-desc">
            We're not just another tech company — we're a brand licensing and
            optimization network. Our platform is designed to evolve with you:
            flexible enough to handle dozens of websites, yet simple enough to
            manage without a tech team.
          </p>

          <h4 className="benefits-title">Technical Benefits:</h4>

          <ul className="benefits-list">
            <li>Scalable WordPress foundation with plugin flexibility</li>
            <li>Systemised workflows for repeatable success</li>
            <li>Future-ready dashboards and tools</li>
            <li>Designed for brand licensing, not coding</li>
          </ul>
        </div>

        <div className="growth-right">
          <img src={rightImage} alt="Feature Visual" />
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
