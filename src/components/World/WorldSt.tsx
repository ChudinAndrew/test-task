import { connect, useDispatch } from "react-redux";
import { useEffect, FC } from "react";
import { Paragraph, StatisticWrapper, Title } from "../../style";
import { fetchData } from "./store/actions";

// import { helloSaga } from "../redux/sagas";

const World: FC = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props);

    dispatch(fetchData());
  }, []);
  return (
    <div>
      <Title>World Statistic by COVID-19</Title>
      <StatisticWrapper>
      <div>
        <Paragraph> New Confirmed </Paragraph>
        {props.world.newConfirmed}
      </div>
      <div>
        <Paragraph> Total Confirmed </Paragraph>
        {props.world.totalConfirmed}
      </div>
      <div>
        <Paragraph> New Deaths </Paragraph>
        {props.world.newDeaths}
      </div>
      <div>
        <Paragraph> Total Deaths </Paragraph>
        {props.world.totalDeaths}
      </div>
      </StatisticWrapper>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    world: state.world,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(World);
