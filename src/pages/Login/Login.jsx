import React, { useState } from "react";

import "./Login.css";
import { login, signUp } from "../../firebase";

import Notification from "../../components/Notification/Notification";

import Logo from "../../assets/logo.svg";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showNotification, setShowNotification] = useState(true);

  const mockEmail = "test@email.com";
  const mockPassword = "Test1234";

  const userAuth = async (event) => {
    event.preventDefault();

    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="login">
      <img src={Logo} alt="Netflix-Logo" className="loginLogo" />
      <div className="loginForm">
        <h1>{signState}</h1>

        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />

          <button onClick={userAuth} type="submit">
            {signState}
          </button>

          <div className="formHelp">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="formSwitch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
      {showNotification && (
        <Notification
          message={
            <div>
              <h4>You can create new credentials or use these:</h4>
              <p>
                Email: <strong>{mockEmail}</strong>
              </p>
              <p>
                Password: <strong>{mockPassword}</strong>
              </p>
            </div>
          }
          onClose={closeNotification}
        />
      )}
    </div>
  );
};

export default Login;
