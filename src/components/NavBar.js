import React from "react";
import NavTab from "./NavTab.js";

const NavBar = () => {
    var style = {
        display: "flex",
        justifyContent: "flex-end"
    }
    var headStyle = {
        display: "flex",
        justifyContent: "center",
        fontweight: "bold"
    }
  return (
      <div>
          <h1 style={headStyle}> Soccer Jersey Shop</h1>
          <div style = {style}>
            <NavTab to="/about" label="Continue Shopping" />
            <NavTab to="/cart" label="My Cart" />
          </div>
      </div>
    
  );
};

export default NavBar