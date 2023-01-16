import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SideMenu.css"

export default function SideMenu() {
  const navigate = useNavigate();

  return (
    <div className="sideMenu">
      <button onClick={() => {navigate("/")}}>Home</button>
      <button onClick={() => {navigate("/Products")}}>Products</button>
      <button onClick={() => {navigate("/Users")}}>Users</button>
      <button onClick={() => {navigate("/Login")}}>Login</button>
    </div>
  );
}
