import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Clients {
  clientID: string;
  clientName: string;
  clientPermission: string;
  clientType: string;
}

const ClientDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrors] = useState("");
  const [clientDetails, setClientDetails] = useState<Clients>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:62239/api/getClientList/${id}`)
      .then((response) => {
        setClientDetails(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <div className="spiner-border">Loading...</div>}
      {!isLoading && (
        <div>
          <h2>Details Page of Client ID {id}</h2>
          <br />
          <div>
            <strong>Client ID:</strong> {clientDetails?.clientID}
            <br></br>
            <strong>Client Name:</strong> {clientDetails?.clientName}
            <br></br>
            <strong>Client Permission:</strong>{" "}
            {clientDetails?.clientPermission}
            <br></br>
            <strong>Client Type:</strong> {clientDetails?.clientType}
            <br></br>
          </div>
        </div>
      )}

      <br />
      <button className="btn btn-secondary" onClick={() => navigate("/client")}>
        Back to Clients Page
      </button>
    </div>
  );
};

export default ClientDetails;
