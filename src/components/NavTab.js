import React from "react";
import { NavLink } from "react-router-dom";

const NavTab = props => {
  var activeStyle = {
    color: "#696969",
    fontWeight: "bold"
  };

  var navStyle = {
    margin: "10px",
    color: "#8B0000",
    textDecoration: "none"
  };
  return (
    <NavLink style={navStyle} activeStyle={activeStyle} to={props.to}>
      {props.label}
    </NavLink>
  );
};

export default NavTab;