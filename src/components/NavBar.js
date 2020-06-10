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
    var cpStyle = {
        display: "flex",
        justifyContent: "center",
        color: "#DC143C"
    }
  return (
      <div>
          <h1 style={headStyle}> Soccer Jersey Shop</h1>
          <h3 style={cpStyle}>Use coupon code "onsale" for 15% off with any order more than $200</h3>
          <div style = {style}>
            <NavTab to="/home" label="Continue Shopping" />
            <NavTab to="/cart" label="My Cart" />
            <p style={qtStyle}>{props.totalQuantity}</p>
          </div>
          <hr/>
      </div>
    
  );
};

export default NavBar;