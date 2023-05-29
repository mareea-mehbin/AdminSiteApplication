interface Props {
  text: string;
}

import { Navigate, useNavigate } from "react-router-dom";
const DashBoard = (props: Props) => {
  const navigate = useNavigate();

  const goToClient = () => {
    navigate("/client/");
  };

  const goToUser = () => {
    navigate("/user/");
  };

  const doLogout = () => {
    localStorage.removeItem("Isauth");
    navigate("/login/");
  };

  if (localStorage.getItem("Isauth") === "false") {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <br />
        <div className="row">
          <h3 className="col-sm-10">
            Welcome, {localStorage.getItem("username")}
          </h3>
          <button className="btn btn-primary col-sm-2" onClick={doLogout}>
            Logout
          </button>
        </div>

        <br />
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">
            Home
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={goToClient}>
            Client
          </button>
          <button type="button" className="btn btn-primary" onClick={goToUser}>
            User
          </button>
          <button type="button" className="btn btn-primary">
            About
          </button>
          <button type="button" className="btn btn-primary">
            Help
          </button>
        </div>
        <br />
        <br />
        <br />
        <div>
          <p>{props.text}</p>
        </div>
      </div>
    );
  }
};

export default DashBoard;
