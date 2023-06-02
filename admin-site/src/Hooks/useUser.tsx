import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  id: string;
  userName: string;
  companyID: string;
  companyName: string;
  userType: string;
}

const useUser = () => {
  const [users, setUsers] = useState<Props[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:62239/api/Admin/getuserList")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const deleteUser = (id: string) => {
    const originalState = [...users];
    setUsers(users.filter((x) => x.id !== id));
    axios
      .delete("http://localhost:62239/api/Admin/deleteUser/" + id)
      .then((response) => {
        if (response.data) alert("User deleted successfully");
      })
      .catch((err) => {
        setErrors(err.message);
        setUsers(originalState);
      });
  };

  return { users, error, isLoading, deleteUser };
};

export default useUser;
