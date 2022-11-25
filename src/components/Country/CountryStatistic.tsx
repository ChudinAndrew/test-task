import { FC, useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Paragraph, StatisticItem, StatisticWrapper, Title } from "../../style";
import Preloader from "../preloader";
import { RootState } from "../../redux/redux-store";

const Statistic: FC = () => {
  const {
    newConfirmed,
    totalConfirmed,
    error,
    isLoading,
    newDeaths,
    totalDeaths,
    country
  } = useSelector(({ country }: RootState) => ({
    newConfirmed: country?.newConfirmed,
    totalConfirmed: country?.totalConfirmed,
    error: country?.error,
    isLoading: country?.isLoading,
    newDeaths: country?.newDeaths,
    totalDeaths: country?.totalDeaths,
    country:country.country,
  }));
  useEffect(() => {
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
              <Title>{country} Statistic by COVID-19</Title>
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


export default Statistic;
