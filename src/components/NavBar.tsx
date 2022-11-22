import React from "react";
import { NavLink } from "react-router-dom";
import { NavBarContainer } from "../style";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink  to="/ukraine/">Ukraine</NavLink>
      <NavLink  to="/world/">World</NavLink>
    </NavBarContainer>
  );
};

export default NavBar;