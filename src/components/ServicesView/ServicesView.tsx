import React from "react";
import "./ServicesView.css";

const ServicesView: React.FC = (props) => {
  return (
    <div className="view">
      <span className="padding-left" />
      <div className="content">
        <span style={{ flexDirection: "column" }}>
          <h1>Our Services</h1>
          <p>
            Ateneo CODE caters to the needs of its clients with services that
            are tailor-fit to their specific needs instead of executing
            generalized programs. Ateneo CODE does heavy research to ensure that
            the services that it will deliver to clients are unique and
            exceptional.
          </p>
        </span>
        <span className="services">
          <div className="headed-text" style={{ flexBasis: 1, flexGrow: 1 }}>
            <h2>Short-Term Engagements</h2>
            <p>
              Short-Term Engagements are engagements that aim to train, develop
              and strengthen knowledge, skills, and attitudes of the members of
              the client organization. We take great time and effort to deliver
              appropriate modules to the clients’ contexts, as long as they are
              in the realm of Organization Development. Examples of short-term
              engagements include leadership training, specialized skills
              training, and team building sessions.
            </p>
          </div>
          <span style={{ flexBasis: "5%", flexGrow: 0.1 }} />
          <div className="headed-text" style={{ flexBasis: 1, flexGrow: 1 }}>
            <h2>Long-Term Engagements</h2>
            <p>
              Long-Term Engagements are engagements that tackle structural
              aspects of the organization by guiding the client through
              discussions and offering valuable insight. The following are
              examples of topics covered in Long-Term Engagements: Vision and
              Mission; Organizational Diagnosis; Constitution; Code of Internal
              Procedures; Processes, Systems, and Structures; and Member
              Development and Retention Programs.
            </p>
          </div>
          <span style={{ flexBasis: "5%", flexGrow: 0.1 }} />
          <div className="headed-text" style={{ flexBasis: 1, flexGrow: 1 }}>
            <h2>Consultancy Teams</h2>
            <p>
              Consultancy Teams are engagements that focus on
              organizational-wide issues. Playing a more advisory and
              facilitative role, we aim to help the client come up with a plan
              of action by the end of the engagement. This is a relatively new
              service offered by Ateneo CODE, led by a smaller, more flexible
              team.
            </p>
          </div>
        </span>
      </div>
      <span className="padding-right" />
    </div>
  );
};

export default ServicesView;
