import { useNavigate, useParams } from "react-router-dom";
const UserDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let clients = {
    uid: "u001",
    uname: "Rosa",
    cid: "co001",
    cname: "Company01",
    upermission: "permission01",
    utype: "type01",
  };
  return (
    <div>
      <h1>User Details Page {id}</h1>
      <div>
        User ID: {clients.uid}
        <br></br>
        User Name: {clients.uname}
        <br></br>
        Company ID: {clients.cid}
        <br></br>
        Company Name: {clients.cname}
        <br></br>
        User Permission: {clients.upermission}
        <br></br>
        User Type: {clients.utype}
        <br></br>
      </div>
      <br />
      <button className="btn btn-secondary" onClick={() => navigate("/user")}>
        Back to Users Page
      </button>
    </div>
  );
};

export default UserDetails;
