import React from "react";
import Search from "./Search";
import Icons from "./Icons";

const Header = () => {
  return (
    <div style={{ width: "70%", padding: 10, display: "flex", alignItems: "center", height: "50px", justifyContent: "space-between" }}>
      <Search></Search>
      <Icons></Icons>
    </div>
  );
};

export default Header;
