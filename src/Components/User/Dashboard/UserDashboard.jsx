import React, { useEffect } from "react";
import "../../Common/Css/Dashboard.css";
import logo from "../../../LoginAssets/logo.png";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Navbar from "../../Common/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigateTO = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userDetails") == null) {
      navigateTO("/");
    } else if (localStorage.getItem("userDetails") != null) {
      navigateTO();
    }
  }, []);

  return (
    <>
      <Navbar />

      <div id="home" className="hero">
        <img src={logo} alt="profile image" />
        <h1>This is User page </h1>
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
              <Stack direction="row" spacing={2}>
                <Button variant="outlined">Primary</Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
