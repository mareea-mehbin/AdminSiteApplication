import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
const Login = () => {
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const doLogin = () => {
    if (username === "" || password === "") {
      alert("Username or Password must not be blank.");
      return;
    }
    if (username === "admin" && password === "admin") {
      localStorage.setItem("username", username);
      localStorage.setItem("Isauth", "true");
      navigate("/dashboard/");
    } else {
      ReactDOM.render(
        <Alert>Login failed, try again...</Alert>,
        document.getElementById("root")
      );
    }
  };
  const handleReset = () => {
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <div>
        <form>
          <div className="row mb-3">
            <label htmlFor="t1username" className="col-sm-1 col-form-label">
              Username:
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="t1username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="t2password" className="col-sm-1 col-form-label">
              Password:
            </label>
            <div className="col-sm-4">
              <input
                type="password"
                className="form-control"
                id="t2password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary" onClick={doLogin}>
              Login
            </button>
            <button
              type="reset"
              className="btn btn-secondary"
              onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
