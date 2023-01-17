import "../../style/main/Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar container">
      <h4 className="navbarTitle">Popular products</h4>
      <ul className="navbarList">
        <li className="navbarItem ">
          <button className="select">All</button>
        </li>
        <li className="navbarItem">
          <button>Laptops </button>
        </li>
        <li className="navbarItem">
          <button>Tablets</button>
        </li>
        <li className="navbarItem">
          <button>appliances</button>
        </li>
        <li className="navbarItem">
          <button>others</button>
        </li>
      </ul>
    </div>
  );
}
