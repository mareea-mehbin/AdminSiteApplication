import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Users {
  id: string;
  userName: string;
  companyID: string;
  companyName: string;
  userType: string;
}

const UserDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrors] = useState("");
  const [userDetails, setUserDetails] = useState<Users>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:62239/api/Admin/getuserListbyID/${id}`)
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <div className="spiner-border">Loading...</div>}
      {!isLoading && (
        <div>
          <h2>Details Page of User ID {id}</h2>
          <br />
          <div>
            <strong>User ID:</strong> {userDetails?.id}
            <br />
            <br />
            <strong>Username:</strong> {userDetails?.userName}
            <br />
            <br />
            <strong>Company ID:</strong> {userDetails?.companyID}
            <br />
            <br />
            <strong>Company Name:</strong> {userDetails?.companyName}
            <br />
            <br />
            <strong>User Type:</strong> {userDetails?.userType}
            <br />
          </div>
        </div>
      )}

      <br />
      <button className="btn btn-secondary" onClick={() => navigate("/user")}>
        Back to Users Page
      </button>
    </div>
  );
};

export default UserDetails;
