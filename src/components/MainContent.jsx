import React from "react";
import Product from "./Product";

const MainContent = () => {
  const products = [
    { title: "MacBook", price: "1500 USD" },
    { title: "IPad", price: "1600 USD" },
    { title: "Samsung Galaxy", price: "2600 USD" },
    { title: "Lenovo Yoga", price: "4500 USD" },
    { title: "Dell Xps", price: "1500 USD" },
  ];
  return (
    <div style={{ position: "absolute", top: 100, left: 200 }}>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {products.map((product) => {
          return <Product  title={product.title} price={product.price}></Product>;
        })}
      </ul>
    </div>
  );
};

export default MainContent;
