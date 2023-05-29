import { Navigate, useNavigate } from "react-router-dom";
const User = () => {
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate("/userdetails/u001");
  };
  let clients = [
    {
      uid: "u001",
      uname: "Rosa",
      cid: "co001",
      cname: "Company01",
      upermission: "permission01",
      utype: "type01",
    },
    {
      uid: "u002",
      uname: "Holly",
      cid: "co002",
      cname: "Company02",
      upermission: "permission02",
      utype: "type02",
    },
    {
      uid: "u003",
      uname: "Betty",
      cid: "co003",
      cname: "Company03",
      upermission: "permission03",
      utype: "type03",
    },
    {
      uid: "u004",
      uname: "Claire",
      cid: "co004",
      cname: "Company04",
      upermission: "permission04",
      utype: "type04",
    },
  ];

  return (
    <>
      <table className="table table-striped">
        <tr>
          <th scope="col">User ID</th>
          <th scope="col">User Name</th>
          <th scope="col">Company ID</th>
          <th scope="col">Company Name</th>
          <th scope="col">User Permission</th>
          <th scope="col">User Type</th>
          <th scope="col">Details</th>
        </tr>
        {clients.map((item, index) => (
          <tr key={index}>
            <td>{item.uid}</td>
            <td>{item.uname}</td>
            <td>{item.cid}</td>
            <td>{item.cname}</td>
            <td>{item.upermission}</td>
            <td>{item.utype}</td>
            <td>
              <button className="btn btn-light" onClick={goToDetails}>
                Details
              </button>
            </td>
          </tr>
        ))}
      </table>

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
