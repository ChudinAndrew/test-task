import { FC, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchUkraineData } from "./store/reducer";
import { Paragraph, StatisticItem, StatisticWrapper, Title } from "../../style";

const Urkaine: FC = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUkraineData());
  }, []);

  return (
    <div>
      <Title>Ukraine Statistic by COVID-19</Title>
      <StatisticWrapper>
      <StatisticItem>
        <Paragraph> New Confirmed </Paragraph>
        <div>{props.ukraine.newConfirmed}</div>
      </StatisticItem>
      <StatisticItem>
        <Paragraph> Total Confirmed </Paragraph>
        <div>{props.ukraine.totalConfirmed}</div>
      </StatisticItem>
      <StatisticItem>
        <Paragraph> New Deaths </Paragraph>
        <div>{props.ukraine.newDeaths}</div>
      </StatisticItem>
      <StatisticItem>
      <Paragraph> Total Deaths </Paragraph>
      <div> {props.ukraine.totalDeaths}</div>
      </StatisticItem>
      </StatisticWrapper>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    ukraine: state.ukraine,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Urkaine);
