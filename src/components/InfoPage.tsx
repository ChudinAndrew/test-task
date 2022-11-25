import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, ButtonWrapper, ItemSelect, Title } from "../style";
import { fetchData } from "./Country/store/actions";


const InfoPage: FC = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState('World');
  useEffect(()=>{
    dispatch(fetchData(country));
  },[country])
  return (
    <div>
      <Title>Hello it is my APP for show statistic by COVID-19!</Title>
      <ButtonWrapper>
        <ItemSelect onChange={(e) => setCountry(e.target.value) }>
          <option>World</option>
          <option>Ukraine</option>
          <option>Italy</option>
          <option>Spain</option>
          <option>Canada</option>
        </ItemSelect>
      </ButtonWrapper>
    </div>
  );
};

export default InfoPage;
