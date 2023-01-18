// import Product from "./Product";
// import "../../style/main/Products.css";
// import { useState } from "react";
// import { data } from "../../../util/data";

// export default function Products(prop) {
//   const [Input, setInput] = useState(data);
//   function filter(e) {
//     if (e.target.innerText === "All") {
//       setInput(data);
//     } else {
//       let distinguish = data.filter(
//         (product) => product.category === e.target.innerText
//       );
//       setInput(distinguish);
//     }
//   }
//   return (
//     <div className="Products container">
//       {Input.data.map((pro) => {
//         return (
//           <Product
//             name={pro.name}
//             title={pro.description}
//             category={pro.category}
//             price={pro.price}
//             img={pro.image}
//           />
//         );
//       })}
//     </div>
//   );
// }
