import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Component/Login";
import Alert from "./Component/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, showAlert] = useState(false);
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="dashboard" element={<DashBoard />} /> */}
            <Route
              path="alert"
              element={<Alert children="Alert message"></Alert>}
            />
            {/* <Route path="emp" element={<Employee />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="user" element={<Users />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
