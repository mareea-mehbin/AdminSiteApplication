import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Users {
  id: string;
  userName: string;
  companyID: string;
  companyName: string;
  userType: string;
}

const AddUsers = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState<Users>({
    id: "",
    userName: "",
    companyID: "",
    companyName: "",
    userType: "",
  });
  const [error, setErrors] = useState("");

  const save = () => {
    axios
      .post("http://localhost:62239/api/Admin/addUser", userDetails)
      .then((response) => {
        navigate("/user");
      })
      .catch((error) => setErrors(error.message))
      .finally();
  };

  const resetForm = () => {
    setUserDetails({
      id: "",
      userName: "",
      companyID: "",
      companyName: "",
      userType: "",
    });
  };

  return (
    <div>
      {error && <div>{error}</div>}

      <h2>Add User</h2>
      <div className="row mb-3">
        <label htmlFor="userid" className="col-sm-2 col-form-label">
          User ID
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="userid"
            placeholder="User ID"
            value={userDetails.id}
            onChange={(e) =>
              setUserDetails({ ...userDetails, id: e.target.value })
            }
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="username" className="col-sm-2 col-form-label">
          User Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="User Name"
            value={userDetails.userName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, userName: e.target.value })
            }
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="companyid" className="col-sm-2 col-form-label">
          Company ID
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="companyid"
            placeholder="Company ID"
            value={userDetails.companyID}
            onChange={(e) =>
              setUserDetails({ ...userDetails, companyID: e.target.value })
            }
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="companyname" className="col-sm-2 col-form-label">
          Company Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="companyname"
            placeholder="Company Name"
            value={userDetails.companyName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, companyName: e.target.value })
            }
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="usertype" className="col-sm-2 col-form-label">
          User Type
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control"
            id="usertype"
            placeholder="User Type"
            value={userDetails.userType}
            onChange={(e) =>
              setUserDetails({ ...userDetails, userType: e.target.value })
            }
          />
        </div>
      </div>
      <br />
      <button className="btn btn-secondary" onClick={() => navigate("/user")}>
        Back
      </button>
      <button className="btn btn-secondary" onClick={resetForm}>
        Reset
      </button>
      <button className="btn btn-success" onClick={save}>
        Save
      </button>
    </div>
  );
};

export default AddUsers;
