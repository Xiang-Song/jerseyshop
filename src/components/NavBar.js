import React from "react";
import NavTab from "./NavTab.js";

const NavBar = (props) => {
    var style = {
        display: "flex",
        justifyContent: "flex-end"
    }
    var headStyle = {
        display: "flex",
        justifyContent: "center",
        fontweight: "bold"
    }
    var qtStyle = {
        margin: "10px"
    }
  return (
      <div>
          <h1 style={headStyle}> Soccer Jersey Shop</h1>
          <div style = {style}>
            <NavTab to="/home" label="Continue Shopping" />
            <NavTab to="/cart" label="My Cart" />
            <p style={qtStyle}>{props.totalQuantity}</p>
          </div>
      </div>
    
  );
};

export default NavBar