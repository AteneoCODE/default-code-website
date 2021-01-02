import React from "react";
import "./ExternalContentScreen.css";
import { Switch, Route } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import ServicesView from "../ServicesView/ServicesView";
import XChangeView from "../XChangeView/XChangeView";
import ContactView from "../ContactView/ContactView";

const ExternalContentScreen: React.FC = () => {
  return (
    <div className="MainScreen">
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route exact path="/about">
          <HomeView />
        </Route>
        <Route exact path="/services">
          <ServicesView />
        </Route>
        <Route exact path="/xchange">
          <XChangeView />
        </Route>
        <Route exact path="/contact">
          <ContactView />
        </Route>
      </Switch>
    </div>
  );
};

export default ExternalContentScreen;
