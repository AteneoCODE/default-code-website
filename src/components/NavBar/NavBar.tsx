import React from "react";
import "./NavBar.css";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

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
        <Button variant="text" onClick={() => routeTo("/")}>
          Home
        </Button>
        <Button variant="text" onClick={() => routeTo("/about")}>
          About
        </Button>
        <Button variant="text" onClick={() => routeTo("/services")}>
          Our Services
        </Button>
        <Button variant="text" onClick={() => routeTo("/xchange")}>
          XChange
        </Button>
        <Button variant="text" onClick={() => routeTo("/contact")}>
          Contact
        </Button>
      </span>
    </div>
  );
};

export default NavBar;
