import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font:italic;
  font-size: 20px  
`;

export const NavBarContainer = styled.div`
  height: 50px;
  color: palevioletred;
  background-color: blue;
  font-size: 35px;

  > a {
    margin-top:5px;
    margin-left:5px;
    color: yellow;
  }
  .active {
    color: black;
  }
`;
