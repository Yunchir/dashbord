import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu.jsx";
import Products from "./pages/Products";
import Users from "./pages/Users";
import { Route, Routes } from "react-router-dom";
import "./styles/dashboard.css";

function Dashboard() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <SideMenu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
