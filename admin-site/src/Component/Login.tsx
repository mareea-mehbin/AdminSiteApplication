import { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import axios, { AxiosResponse } from "axios";

interface LoginData {
  userName: string;
  pwd: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData>({
    userName: "",
    pwd: "",
  });

  const doLogin = () => {
    if (loginData.userName === "" || loginData.pwd === "") {
      alert("Username or Password can't be blank");
      return;
    }
    // navigate("/dashboard/");
    axios
      .post("http://localhost:62239/api/login", loginData)
      .then((response) => {
        if (response.data) {
          localStorage.setItem("Isauth", "true");
          navigate("/dashboard/");
        } else {
          ReactDOM.render(
            <Alert>Login failed. Please try again...</Alert>,
            document.getElementById("root")
          );
        }
      });
  };
  const handleReset = () => {
    setLoginData({
      userName: "",
      pwd: "",
    });
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
                value={loginData.userName}
                onChange={(e) =>
                  setLoginData({ ...loginData, userName: e.target.value })
                }
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
                value={loginData.pwd}
                onChange={(e) =>
                  setLoginData({ ...loginData, pwd: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <button type="button" className="btn btn-primary" onClick={doLogin}>
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
