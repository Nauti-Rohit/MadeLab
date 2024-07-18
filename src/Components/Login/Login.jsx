import React from "react";
import "./Login.css";
import "../../App.css";
import { Link, NavLink } from "react-router-dom";

// video and image
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.png";

// Icons
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

export default function Login() {
  return (
    <div>
      <div className="loginPage flex">
        <div className="container flex">
          <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
              <h2 className="title">Create and sell Extraordenary Products</h2>
              <p>Adopt the Natural products</p>
            </div>

            <div className="footerDiv flex">
              <span className="text">Don't have an account?</span>
              <Link to={"/register"}>
                <button className="btn">Sign Up</button>
              </Link>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="logo Image" />
              <h3>Welcome Back!</h3>
            </div>

            <form action="" className="form grid">
              <span className="showMessage"> Login status will go here </span>
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className="icon" />
                  <input
                    Type="text"
                    id="username"
                    placeholder="Enter Username"
                  />
                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className="icon" />
                  <input
                    Type="password"
                    id="password"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <button className="btn flex" type="submit">
                <span>Login</span>
                <AiOutlineSwapRight className="icon" />
              </button>

              <span className="forgotPassword">
                forgot your password? <a href=""> Click Here </a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
