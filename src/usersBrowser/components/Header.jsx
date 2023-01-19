import "../style/Header.css";
import logo from "../img/logo.svg";
import user from "../img/user.svg";
import cart from "../img/shopping-cart.svg";

export default function Header(prop) {
  const { setSign } = prop;
  return (
    <div className="header">
      <div className="headerContent">
        <img src={logo} className="logo" alt="" />
        <div className="search">
          <input
            type="text"
            className="searchInput"
            placeholder="Search any things"
          />
          <button className="searchBtn">Search</button>
        </div>
        <div className="profile">
          <button className="signIn" onClick={() => setSign(true)}>
            <img src={user} alt="" /> Sign in
          </button>
          <button className="cart">
            <img src={cart} alt="" />
            <div className="number">0</div>
          </button>
        </div>
      </div>
    </div>
  );
}
