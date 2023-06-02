import { useNavigate } from "react-router-dom";
import useUser from "../Hooks/useUser";

interface Users {
  id: string;
  userName: string;
  companyID: string;
  companyName: string;
  userType: string;
}
const User = () => {
  const navigate = useNavigate();
  const { users, error, isLoading, deleteUser } = useUser();

  const goToDetails = (user: Users) => {
    navigate(`/userdetails/${user.id}`);
  };

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <div className="spiner-border">Loading...</div>}
      {!isLoading && (
        <div>
          <h2>Users List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Username</th>
                <th scope="col">Company ID</th>
                <th scope="col">Company Name</th>
                <th scope="col">User Type</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.userName}</td>
                  <td>{item.companyID}</td>
                  <td>{item.companyName}</td>
                  <td>{item.userType}</td>
                  <td>
                    <button
                      className="btn btn-light"
                      onClick={() => goToDetails(item)}>
                      Details
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button
        className="btn btn-secondary"
        onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
      <button className="btn btn-success" onClick={() => navigate("/adduser/")}>
        Add User
      </button>
    </>
  );
};

export default User;
