import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <section className="main-section">
        <Navbar />
        <App />
        <Footer />
      </section>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
