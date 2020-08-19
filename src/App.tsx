import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AboutView from "./components/AboutView/AboutView";
import ServicesView from "./components/ServicesView/ServicesView";
import XChangeView from "./components/XChangeView/XChangeView";
import ContactView from "./components/ContactView/ContactView";
import HomeView from "./components/HomeView/HomeView";
import Footer from "./components/Footer/Footer";

const App: React.FC = (props) => {
  return (
    <Router>
      <div className="App">
        <div className="master-grid">
          <NavBar />
          <div className="MainScreen">
            <Switch>
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
              <Route path="/">
                <HomeView />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
