import React from "react";
import "./Register.css";
import "../../App.css";
import { Link, NavLink } from "react-router-dom";

// video and image
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.png";

// Icons
import { MdMarkEmailRead } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

export default function Register() {
  return (
    <div>
      <div className="registerPage flex">
        <div className="container flex">
          <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
              <h2 className="title">Create and sell Extraordenary Products</h2>
              <p>Adopt the Natural products</p>
            </div>

            <div className="footerDiv flex">
              <span className="text">Have an account?</span>
              <Link to={"/"}>
                <button className="btn">Login</button>
              </Link>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="logo Image" />
              <h3>Let Us Know You!</h3>
            </div>

            <form action="" className="form grid">
              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flex">
                  <MdMarkEmailRead className="icon" />
                  <input type="email" id="email" placeholder="Enter Email" />
                </div>
              </div>

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
                <span>Register</span>
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
