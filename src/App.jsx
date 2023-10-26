import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";


// lifting the state up
// Leaving our lifting state concept
// Jumping to implement Redux ---> Redux ToolKit
function App() {
  return (
    <div>
      <div style={{display : "flex"}}>
        <SideBar></SideBar>
        <Header></Header>
      </div>
      <MainContent ></MainContent>
    </div>
  );
}

export default App;
