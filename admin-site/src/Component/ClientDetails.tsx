import { useNavigate, useParams } from "react-router-dom";
const ClientDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let clients = {
    id: "c001",
    name: "Tomas",
    permission: "permission01",
    type: "type01",
  };
  return (
    <div>
      <h1>Client Details Page {id}</h1>
      <div>
        Client ID: {clients.id}
        <br></br>
        Client Name: {clients.name}
        <br></br>
        Client Permission: {clients.permission}
        <br></br>
        Client Type: {clients.type}
        <br></br>
      </div>
      <br />
      <button className="btn btn-secondary" onClick={() => navigate("/client")}>
        Back to Clients Page
      </button>
    </div>
  );
};

export default ClientDetails;
