import "../style/signIn.css";
import logo1 from "../img/logo1.svg";
import icon from "../img/Icon.svg";

export default function SingIn(prop) {
  const { sign } = prop;

  return (
    <div className="modalSignIn">
      <div className="modalContent">
        <div className="logo">
          <img src={logo1} alt="" />
          <button onClick={() => sign(false)}>
            <img src={icon} alt="" onClick={() => sign} />
          </button>
        </div>
        <form>
          <div className="singInp">
            <input
              type="text"
              name="text"
              placeholder="И-мэйл эсвэл Утасны дугаар"
            />
            <input type="password" name="password" placeholder="Нууц үг" />
            <a href="/" className="neverMind">
              Нууц үгээ мартсан уу?
            </a>

            <button className="userSing">Нэвтрэх</button>
            <div className="or">
              <span className="">Эсвэл</span>
              <div className="border"></div>
            </div>
            <button className="register">Бүртгүүлэх</button>
          </div>
        </form>
      </div>
    </div>
  );
}
