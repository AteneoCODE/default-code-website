import React from "react";
import "./NavBar.css";
import { useHistory } from "react-router-dom";

const NavBar: React.FC = (props) => {
  let history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  return (
    <div className="NavBar">
      <h1 className="title">ATENEO CODE</h1>
      <h3 className="subtitle">
        Consultants for Organization Development and Empowerment
      </h3>
      <span className="flex-bottom">
        <button
          onClick={() => {
            routeTo("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            routeTo("/about");
          }}
        >
          About Us
        </button>
        <button
          onClick={() => {
            routeTo("/services");
          }}
        >
          Our Services
        </button>
        <button
          onClick={() => {
            routeTo("/xchange");
          }}
        >
          XChange
        </button>
        <button
          onClick={() => {
            routeTo("/contact");
          }}
        >
          Contact Us
        </button>
      </span>
    </div>
  );
};

export default NavBar;
