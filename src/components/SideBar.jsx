import React from "react";
import Category from "./Category";

const SideBar = () => {
  const categories = [
    { icon: "fa-solid fa-computer", name: "Desktop" },
    { icon: "fa-solid fa-tablet", name: "Tablet" },
    { icon: "fa-solid fa-mobile", name: "Mobile" },
    { icon: "fa-solid fa-laptop", name: "Laptop" },
    { icon: "fa-solid fa-diagram-project", name: "Projector" },
  ];
  return (
    <div style={{ height: "100vh", width: "20%", borderRight: "black solid 10" }}>
      <h2 style={{ padding: 10 }}>Categories</h2>
      <ul>
        {categories.map((cat, index) => {
          return <Category key={index} icon={cat.icon} name={cat.name}></Category>;
        })}
      </ul>
    </div>
  );
};

export default SideBar;
