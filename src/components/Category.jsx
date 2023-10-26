import React from "react";

const Category = ({icon,name}) => {
  return (
    <>
      <div style={{padding : 10,display : "flex" , gap : 12,alignItems : "center" , cursor : "pointer"}}>
        <i className={icon}></i>
        <h4>{name}</h4>
      </div>
    </>
  );
};

export default Category;
