import { Navigate, useNavigate } from "react-router-dom";
const Client = () => {
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate("/clientdetails/c001");
  };
  let clients = [
    {
      id: "c001",
      name: "Tomas",
      permission: "permission01",
      type: "type01",
    },
    {
      id: "c002",
      name: "Hugh",
      permission: "permission02",
      type: "type02",
    },
    {
      id: "c003",
      name: "Delaney",
      permission: "permission03",
      type: "type03",
    },
    {
      id: "c004",
      name: "Willa",
      permission: "permission04",
      type: "type04",
    },
    {
      id: "c005",
      name: "Ivy",
      permission: "permission05",
      type: "type05",
    },
  ];

  return (
    <>
      <table className="table table-striped">
        <tr>
          <th scope="col">Client ID</th>
          <th scope="col">Client Name</th>
          <th scope="col">Client Permission</th>
          <th scope="col">Client Type</th>
          <th scope="col">Details</th>
        </tr>
        {clients.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.permission}</td>
            <td>{item.type}</td>
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
    </>
  );
};

export default Client;
