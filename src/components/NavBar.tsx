import React from "react";
import { NavLink } from "react-router-dom";
import { NavBarContainer } from "../style";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink  to="/ukraine/">Ukraine S</NavLink>
      <NavLink  to="/world/">World S</NavLink>
    </NavBarContainer>
  );
};

export default NavBar;