import { useNavigate } from "react-router-dom";
import "../styles/SideMenu";

export default function SideMenu() {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", height: "60px", backgroundColor: "grey" }}>
      SideMenu
    </div>
  );
}
