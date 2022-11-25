import { FC, useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { fetchUkraineData } from "./store/reducer";
import { Paragraph, StatisticItem, StatisticWrapper, Title } from "../../style";
import Preloader from "../preloader";
import { RootState } from "../../redux/redux-store";

const Urkaine: FC = () => {
  const dispatch = useDispatch();
  const {
    newConfirmed,
    totalConfirmed,
    error,
    isLoading,
    newDeaths,
    totalDeaths,
  } = useSelector(({ ukraine }: RootState) => ({
    newConfirmed: ukraine.newConfirmed,
    totalConfirmed: ukraine.totalConfirmed,
    error: ukraine.error,
    isLoading: ukraine.isLoading,
    newDeaths: ukraine.newDeaths,
    totalDeaths: ukraine.totalDeaths,
  }));
  useEffect(() => {
    dispatch(fetchUkraineData());
  }, []);
  return (
    <>
      {isLoading ? (
        <div>
          {" "}
          <Preloader />{" "}
        </div>
      ) : (
        <div>
          {error ? (
            <Title>{error}</Title>
          ) : (
            <>
              <Title>Ukraine Statistic by COVID-19</Title>
              <StatisticWrapper>
                <StatisticItem>
                  <Paragraph> New Confirmed </Paragraph>
                  <div>{newConfirmed}</div>
                </StatisticItem>
                <StatisticItem>
                  <Paragraph> Total Confirmed </Paragraph>
                  <div>{totalConfirmed}</div>
                </StatisticItem>
                <StatisticItem>
                  <Paragraph> New Deaths </Paragraph>
                  <div>{newDeaths}</div>
                </StatisticItem>
                <StatisticItem>
                  <Paragraph> Total Deaths </Paragraph>
                  <div> {totalDeaths}</div>
                </StatisticItem>
              </StatisticWrapper>
            </>
          )}
        </div>
      )}
    </>
  );
};


export default Urkaine;
