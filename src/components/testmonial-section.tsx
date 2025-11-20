import "./testmonial-section.css";
import user1 from "../assets/test-user.png";
import user2 from "../assets/test-user2.png";
import user3 from "../assets/test-user3.png";
const Testmonial = () => {
  return (
    <section className="testmonial-section">
      <div className="tes-heading">
        <h1 className="heading">
          Hear From our Satisfied{" "}
          <span style={{ color: "#4380FC" }}>Customers</span>
        </h1>
      </div>
      <div className="tes-desc">
        <p className="desc">
          The best way to showcase our commitment is through the experiences and
          stories of those who have partnered with us.
        </p>
      </div>
      <div className="test-box">
        <div className="test-card">
          <div className="text-box">
            <p className="text">
              The A/B testing helped us refine our email campaigns, resulting in
              a huge increase in open rates.
            </p>
          </div>
          <div className="user-profile-box">
            <div>
              <img
                src={user1}
                alt="user"
                style={{ borderRadius: "50%", height: "64px", width: "64px" }}
              />
            </div>
            <div
              style={{ width: "119px", height: "54px", padding: "10px 2px" }}
            >
              <p className="user-name">
                <b>Frederic Hill</b>
              </p>
              <p className="user-designation">Founder & CEO</p>
            </div>
          </div>
          <div
            style={{
              width: "350px",
              height: "0px",
              borderWidth: "1px",
              color: "#FFFFFF1A",
              margin: "30px 0",
            }}
          ></div>
          <div className="user-archived">
            <big>+120%</big>
            <p>Increase in ad awareness in the first month</p>
          </div>
        </div>

        <div className="test-card">
          <div className="text-box">
            <p className="text">
              Our social media engagement soared within the first month of using
              this software.
            </p>
          </div>
          <div className="user-profile-box">
            <div>
              <img
                src={user2}
                alt="user"
                style={{ borderRadius: "50%", height: "64px", width: "64px" }}
              />
            </div>
            <div
              style={{ width: "119px", height: "54px", padding: "10px 2px" }}
            >
              <p className="user-name">
                <b>Safaa Sampson</b>
              </p>
              <p className="user-designation">Account Executive</p>
            </div>
          </div>
          <div
            style={{
              width: "350px",
              height: "0px",
              borderWidth: "1px",
              color: "#FFFFFF1A",
              margin: "30px 0",
            }}
          ></div>
          <div className="user-archived">
            <big>+10k</big>
            <p>New followers in the last 4 months</p>
          </div>
        </div>
        <div className="test-card">
          <div className="text-box">
            <p className="text">
              This software allowed us to increase our lead generation, leading
              to a rise in conversions.
            </p>
          </div>
          <div className="user-profile-box">
            <div>
              <img
                src={user3}
                alt="user"
                style={{ borderRadius: "50%", height: "64px", width: "64px" }}
              />
            </div>
            <div
              style={{ width: "119px", height: "54px", padding: "10px 2px" }}
            >
              <p className="user-name">
                <b>Brendan Buck</b>
              </p>
              <p className="user-designation">Marketing Manager</p>
            </div>
          </div>
          <div
            style={{
              width: "350px",
              height: "0px",
              borderWidth: "1px",
              color: "#FFFFFF1A",
              margin: "30px 0",
            }}
          ></div>
          <div className="user-archived">
            <big>+50%</big>
            <p>Increase in paid bookings vs last year</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testmonial;
