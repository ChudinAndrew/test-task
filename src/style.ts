import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: darkred;
  height: 100vh;
  display: grid;
`;
export const NavBarContainer = styled.div`
  height: 50px;
  color: palevioletred;
  background-color: grey;
  font-size: 35px;

  > a {
    margin-top: 5px;
    margin-left: 5px;
    color: yellow;
  }
  .active {
    color: #45fcff;
  }
`;

export const Title = styled.h1`
  background-color: black;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
  width: 400px;
  position: relative;
  /* padding: 5px ; */
  color: white;
  font: italic;
  font-size: 20px;
  border: 3px solid gray;
  font-family: "Courier New", Courier, monospace;
`;
export const StatisticWrapper = styled.div`
  background-color: black;
  margin: 0 auto;
  margin-top: 10px;
  text-align: left;
  width: 400px;
  position: relative;
  /* padding: 5px ; */
  color: white;
  font: italic;
  font-size: 20px;
  border: 3px solid gray;
  font-family: "Courier New", Courier, monospace;
`;

export const Paragraph = styled.div`
  border: 3px solid grey;
  text-align: center;
  /* width: 180px; */
  font-family: "Courier New", Courier, monospace;
  background-color: black;
  color: white;
  display: inline-block;
  margin-right: 15px;
  margin-left: 15px;
`;
export const PreloaderWrapper = styled.div`
  text-align:center;
  `;

export const ButtonWrapper = styled.div`
  text-align: center;
`;
export const StatisticItem = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Button = styled.button`
  text-align: center;
  margin: 5px 5px;
  display: inline-block;
  background-color: black;
  color: white;
`;
export const ItemSelect = styled.select`
width: 100px;
height: 30px;
  background-color: black;
  color: white;
  border: 3px solid grey;
`;

