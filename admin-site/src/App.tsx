import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Component/Login";
import Alert from "./Component/Alert";
import DashBoard from "./Component/Dashboard";
import Client from "./Component/Client";
import AddUsers from "./Component/AddUsers";
import ClientDetails from "./Component/ClientDetails";
import User from "./Component/User";
import UserDetails from "./Component/UserDetails";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route
              path="dashboard"
              element={<DashBoard text="Copyright © 2023 React Training" />}
            />
            <Route path="alert" element={<Alert>Alert message</Alert>} />
            <Route path="client" element={<Client />} />
            <Route path="clientdetails/:id" element={<ClientDetails />} />
            <Route path="user" element={<User />} />
            <Route path="userdetails/:id" element={<UserDetails />} />
            <Route path="adduser" element={<AddUsers />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
