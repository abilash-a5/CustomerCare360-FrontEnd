import { Routes, Route } from "react-router-dom";

// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import Home from "../pages/Home";
import ServiceOrderManagement from "../pages/ServiceOrderManagement";

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} /> */}

      <Route path="/" element={<ServiceOrderManagement />}/>
    </Routes>
  );
}
