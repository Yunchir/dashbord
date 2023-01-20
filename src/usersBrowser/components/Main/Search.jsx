import { useParams } from "react-router-dom";
import { data } from "../../../util/data";
import Product from "./Product";

export default function Search() {
  const test = useParams();

  let dat = data.filter((t) =>
    t.name.toLowerCase().includes(test.product.toLowerCase)
  );
  return (
    <div>
      {dat.map((e) => (
        <Product
          title={e.title}
          image={e.image}
          description={e.description}
          price={e.price}
          id={e.id}
        />
      ))}
    </div>
  );
}
