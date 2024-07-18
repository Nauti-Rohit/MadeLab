import React, { useEffect, useState } from "react";
import "./Login.css";
import "../../App.scss";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

// video and image
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.png";

// Icons
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

export default function Login() {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigateTO = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");
  const [statusHolder, setStatusHolder] = useState("message");

  const loginUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/login", {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
    }).then((res) => {
      if (res.data.message || loginUserName == "" || loginPassword == "") {
        navigateTO("/");
        setLoginStatus("Credential Don't Exist");
      } else {
        navigateTO("/dashboard");
      }
    });
  };

  useEffect(() => {
    if (loginStatus !== "") {
      setStatusHolder("showMessaage");
      setTimeout(() => {
        setStatusHolder("Messaage");
      }, 4000);
    }
  }, [loginStatus]);

  const onSubmit = () => {
    setLoginUserName("");
    setLoginPassword("");
  };

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

            <form className="form grid" onSubmit={onSubmit}>
              <span className={statusHolder}> {loginStatus} </span>

              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className="icon" />
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter Username"
                    onChange={(event) => {
                      setLoginUserName(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className="icon" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="btn flex" onClick={loginUser}>
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
