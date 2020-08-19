import React from "react";
import "./XChangeView.css";
import xv1 from "../../assets/xv1.jpg";

const XChangeView: React.FC = (props) => {
  return (
    <div className="XChangeView">
      <span className="padding-left" />
      <div className="content">
        <span style={{ flexDirection: "column" }}>
          <h1>XChange: Organization Development Seminar</h1>
          <p>
            XChange is an Organization Development (OD) seminar for college and
            senior high school-level youth organizations. It aims to create
            impact for the nation by equipping leaders with knowledge, skills,
            and abilities relevant to their contexts, being an avenue for
            solutions crafting and ideation, and providing opportunities for
            these organizations to collaborate.
          </p>
          <img
            src={xv1}
            alt="XChange"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <p>
            Expect to deepen your understanding of OD and how you can apply them
            to your own organization, as well as network and learn from various
            speakers, trained facilitators, and fellow leaders. Like and follow
            the XChange Facebook Page for more updates.
          </p>
          <p>https://www.facebook.com/XChangeSeminar/</p>
        </span>
      </div>
      <span className="padding-right" />
    </div>
  );
};

export default XChangeView;
