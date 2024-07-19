import React from "react";
import "../../App.scss";
import { Link } from "react-router-dom";

import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.png";

export default function Dashboard() {
  return (
    <div className="dashboardPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <div className="textDiv" style={{ backgroundColor: "yellowgreen" }}>
            <h2 className="title">Welcome in our Dashboard page</h2>
            <p> Thank you for login</p>
          </div>

          <div
            className="footerDiv flex"
            style={{ backgroundColor: "yellowgreen" }}
          >
            <span className="text">back to login</span>
            <Link to={"/"}>
              <button className="btn">Log Out</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
