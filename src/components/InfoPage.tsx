import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonWrapper, Title } from "../style";
import NavBar from "./NavBar";

const InfoPage: FC = () => {
    const navigate = useNavigate();
  return(
    <div>
        
     <Title>Hello it is my APP for show statistic by COVID-19!</Title>
     <ButtonWrapper>
     <Button onClick={()=>navigate('/world')}>World</Button>
     <Button onClick={()=>navigate('/ukraine')}>Ukraine</Button>
     </ButtonWrapper>
     </div>
     )};

export default InfoPage;