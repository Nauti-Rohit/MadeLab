import React from "react";
import "../../Common/Css/Dashboard.css";
import logo from "../../../LoginAssets/logo.png";
import Navbar from "../../Common/Navbar/Navbar";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div id="home" className="hero">
        <img src={logo} alt="profile image" />
        <h1>This is Admin page </h1>
        {/* Footer */}
        <div className="footer">
          <div className="footer-bottom">
            <p className="footer-bottom-left">
              &copy; 2024 Rohit Nautiyal. All rights reserved
            </p>
            <div className="footer-bottom-right">
              <p> Term of Services </p>
              <p> Privacy policy </p>
              <p> Connect with me</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
