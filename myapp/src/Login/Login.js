import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="Modal_pageLogin">
      <div className="modal_content">
        <div className="LoginSection">
          <span className="closeButton">X</span>
          <div>
            <from className="LoginFromSection ">
              <h1>Login page</h1>
              <input className="fromInputEl" type="text" />

              <input className="fromInputEl" type="password" />
              <div className="d-flex justify-content-between ">
                <div className="checkboxContainer d-flex flex-column mr-5">
                  <div>
                    <input id="checkbox" type="checkbox" />
                    <label for="checkbox">Remeber details</label>
                  </div>
                  <a href="/singup">RegisterAccount?</a>
                </div>
                <div className="d-flex flex-column">
                  <button type="submit" className="LoginButton">
                    Login
                  </button>
                  <a href="/forgetPassword">Froget Password</a>
                </div>
              </div>
            </from>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
