import React from "react";
import "./ContactView.css";

const ContactView: React.FC = (props) => {
  return (
    <div className="view">
      <span className="padding-left" />
      <div className="content">
        <span style={{ flexDirection: "column" }}>
          <h1>Contact Us</h1>
          <p>
            For groups and organizations within the Loyola Schools of the Ateneo
            de Manila University, please contact Isaiah Filio, Client Relations
            Head (isaiah.filio@obf.ateneo.edu | 0945 804 8219).
          </p>
          <p>
            For groups and organizations outside of the Loyola Schools, please
            contact Kirsten Mayuga, External Relations Head
            (kirsten.mayuga@obf.ateneo.edu | 0917 840 5426).
          </p>
          <p>
            If you have any more questions, feel free to send us an email at
            ateneocodeosg@gmail.com or message the Ateneo CODE Facebook Page.
          </p>
        </span>
      </div>
      <span className="padding-right" />
    </div>
  );
};

export default ContactView;
