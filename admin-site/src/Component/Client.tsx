import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface Clients {
  clientID: string;
  clientName: string;
  clientPermission: string;
  clientType: string;
}

const Client = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState<Clients[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrors] = useState("");

  const goToDetails = (client: Clients) => {
    navigate(`/clientdetails/${client.clientID}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:62239/api/getClientList")
      .then((response) => setClients(response.data))
      .catch((error) => setErrors(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  const deleteClient = (id: string) => {
    const originalState = [...clients];
    setClients(clients.filter((x) => x.clientID !== id));
    axios
      .delete("http://localhost:62239/api/deleteClient/" + id)
      .then((response) => {
        if (response.data) alert("Client deleted successfully");
      })
      .catch((err) => {
        setErrors(err.message);
        setClients(originalState);
      });
  };

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <div className="spiner-border">Loading...</div>}
      {!isLoading && (
        <div>
          <h2>Clients List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Client ID</th>
                <th scope="col">Client Name</th>
                <th scope="col">Client Permission</th>
                <th scope="col">Client Type</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((item, index) => (
                <tr key={index}>
                  <td>{item.clientID}</td>
                  <td>{item.clientName}</td>
                  <td>{item.clientPermission}</td>
                  <td>{item.clientType}</td>
                  <td>
                    <button
                      className="btn btn-light"
                      onClick={() => goToDetails(item)}>
                      Details
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteClient(item.clientID)}>
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
    </>
  );
};

export default Client;
