import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MainScreen from "./components/MainScreen/MainScreen";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <div className="master-grid">
          <NavBar />
          <MainScreen />
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
