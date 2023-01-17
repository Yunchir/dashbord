import Product from "./Product";
import "../../style/main/Products.css";

export default function Products(prop) {
  return (
    <div className="Products container">
      {prop.data.map((pro) => {
        return (
          <Product
            name={pro.name}
            title={pro.description}
            category={pro.category}
            price={pro.price}
            img={pro.image}
          />
        );
      })}
    </div>
  );
}
