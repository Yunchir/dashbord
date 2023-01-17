import Slide from "./Main/Slide";
import "../style/Main.css";
import Products from "./Main/Products";
import Navbar from "./Main/Navbar";
import Ads from "./Main/Ads";
import Speical from "./Main/Speical";
import { data } from "../../until/data";

export default function Main() {
  return (
    <div className="main">
      <Slide
        title={data[0].description}
        name={data[0].name}
        img={data[0].image}
        price={data[0].price}
      />
      <div className="container">
        <Navbar />
        <Products data={data} />
        <Ads />
        <Speical data={data} />
      </div>
    </div>
  );
}
