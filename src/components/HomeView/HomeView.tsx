import React from "react";
import "./HomeView.css";
// Images
import codelogo from "../../assets/codelogo.png";
import hv1 from "../../assets/hv1.jpg";
import hv2 from "../../assets/hv2.jpg";
import hv3 from "../../assets/hv3.jpg";

const HomeView: React.FC = (props) => {
  return (
    <div className="view HomeView">
      <span className="padding-left" />
      <div className="content">
        <h1>What is Ateneo CODE?</h1>
        <span>
          <img src={codelogo} alt="CODE Logo" width="250" height="250" />
          <p style={{ alignSelf: "center" }}>
            <b>Ateneo CODE</b> is a youth-led, non-profit organization, that
            conducts contextualized Organization Development (OD) services to
            empower youth organizations to better serve the nation. <br />
            <br />
            The organization caters to the needs of its clients with services
            that are tailor-fit to their current context. Ateneo CODE offers
            short-term engagements, long-term engagements, and consultancy
            teams. Learn which would be best fit for your organization under our
            services.
          </p>
        </span>
        <span style={{ justifyContent: "space-between" }}>
          <img src={hv1} alt="group discussion" style={{ maxWidth: "33%" }} />
          <img src={hv2} alt="hv2" style={{ maxWidth: "33%" }} />
          <img src={hv3} alt="hv3" style={{ maxWidth: "33%" }} />
        </span>
        <span>
          <div className="vision-mission-item" style={{ flexBasis: "100%" }}>
            <h2 style={{ textAlign: "left" }}>Vision</h2>
            <p style={{ justifySelf: "flex-start" }}>
              We, the Ateneo Consultants for Organization Development and
              Empowerment, imbued with Ignatian Values, envision a society of
              developed individuals by forming sustainable environments
              conducive for people to flourish. Through the practice of
              Organization Development, we aim to form the Youth and
              Youth-Oriented Organizations who will initiate positive change
              within the community.
            </p>
          </div>
          <div className="vision-mission-item" style={{ flexBasis: "100%" }}>
            <h2 style={{ textAlign: "left" }}>Mission</h2>
            <p style={{ justifySelf: "flex-start" }}>
              Our mission is to empower the youth to continually develop their
              organizations and engage in nation-building. This is achieved
              through the promotion of Organization Development (OD) and
              implementation of contextualized OD services by our trained
              consultants.
            </p>
          </div>
        </span>
        <span style={{ flexDirection: "column" }}>
          <h2>Core Competencies</h2>
          <h3>Consultant Development</h3>
          <p>
            Ateneo CODE provides opportunities for its members to grow, develop,
            and be rooted in CODE’s Vision as consultants who are competent in
            the field of Organization Development.
          </p>
          <h3>Application of OD</h3>
          <p>
            CODE Consultants use and apply the concepts of Organization
            Development within the context of both client interventions and
            internal efforts.
          </p>
          <h3>Organization Health</h3>
          <p>
            Ateneo CODE promotes and advocates an environment that is
            sustainable and conducive for organizations and communities to
            flourish.
          </p>
        </span>
        <span style={{ flexDirection: "column" }}>
          <h2>What is Organization Development?</h2>
          <p>
            Organization Development (OD) is a process of planned change in an
            organization’s culture. Then such entails a focus on increasing the
            organization’s effectiveness and health through planned
            interventions. These efforts aim to help the organizations adapt to
            changes, with the help of consultants.
            <br />
            <br />
            It is a tool that Ateneo CODE uses to pursue its advocacy of planned
            change and empowerment for the organizations. We continuously build
            on our capabilities as OD consultants through avenues for constant
            research and practice. We do all of this to ensure that the youth we
            serve are empowered with the necessary knowledge, skills, and
            attitudes to initiate and sustain positive change in their
            respective organizations.
          </p>
        </span>
        <span style={{ flexDirection: "column" }}>
          <h2>Contact Us</h2>
          <p>
            ateneocodeosg@gmail.com
            <br />
            www.facebook.com/AteneoCODE
            <br />
            www.twitter.com/AteneoCODE
          </p>
        </span>
      </div>
      <span className="padding-right" />
    </div>
  );
};

export default HomeView;
