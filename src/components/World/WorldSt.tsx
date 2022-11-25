import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect, FC } from "react";
import { Paragraph, StatisticItem, StatisticWrapper, Title } from "../../style";
import { fetchData } from "./store/actions";
import Preloader from "../preloader";
import { RootState } from "../../redux/redux-store";

// import { helloSaga } from "../redux/sagas";

const World: FC = () => {
  const dispatch = useDispatch();
  const {
    newConfirmed,
    totalConfirmed,
    error,
    isLoading,
    newDeaths,
    totalDeaths,
  } = useSelector(({ world }: RootState) => ({
    newConfirmed: world.newConfirmed,
    totalConfirmed: world.totalConfirmed,
    error: world.error,
    isLoading: world.isLoading,
    newDeaths: world.newDeaths,
    totalDeaths: world.totalDeaths,
  }));

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      {isLoading ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div>
          {error ? (
            <Title>{error}</Title>
          ) : (
            <>
              <Title>World Statistic by COVID-19</Title>
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
                  <div>{totalDeaths}</div>
                </StatisticItem>
              </StatisticWrapper>
            </>
          )}
        </div>
      )}
    </>
  );
};

// const mapStateToProps = (state: any) => {
//   return {
//     world: state.world,
//   };
// };

// const mapDispatchToProps = (dispatch: any) => {
//   return {};
// };

export default World;
