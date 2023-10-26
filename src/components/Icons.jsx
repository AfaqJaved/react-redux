import React from "react";
import { useSelector } from "react-redux";


const Icons = () => {
  const quantity = useSelector((state)=> state.quantity.value);
  return (
    <>
      <div style={{ gap: 12, display: "flex", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <p style={{ background: "orange", padding: 10, position: "absolute", borderRadius: 200, bottom: -20, right: 20, color: "white" }}>{quantity}</p>
          <i className="fa-solid fa-2xl fa-cart-shopping"></i>
        </div>
        <i className="fa-solid fa-2xl fa-user"></i>
      </div>
    </>
  );
};

export default Icons;
