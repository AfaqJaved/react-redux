import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity } from "../reducers/QuantityReducer";

const Product = ({ title, price}) => {
  const dispatch = useDispatch();
  const [currentQuantity,setCurrentQuantity] = React.useState(0);
  return (
    <>
      <li style={{ position: "relative", listStyle: "none", border: "black solid", width: 200, height: 200, textAlign: "center" }}>
        <h4>{title}</h4>
        <h4>{price}</h4>
        <div style={{ marginTop: 20 }}>
          <label htmlFor="">Quantity : </label>
          <input value={currentQuantity} onChange={(e)=>{
            let value = e.target.value;
            let toInt = parseInt(value);
            setCurrentQuantity(toInt);
          }} style={{ padding: 10 }} type="number"></input>
        </div>
        <button onClick={()=>{
          dispatch(increaseQuantity(currentQuantity));
        }} style={{ padding: 10, position: "absolute", bottom: 10 }}>Add To Cart</button>
      </li>
    </>
  );
};

export default Product;
