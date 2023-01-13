import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", height: "60px", backgroundColor: "grey" }}>
      Header
    </div>
  );
}
