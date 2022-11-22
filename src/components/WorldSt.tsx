import axios from "axios";
import { connect } from "react-redux";
import React, { useEffect , FC } from "react";
import { Title } from "../style";

const World:FC = (props: any) => {
  useEffect(() => {
    // const WorldRequest =()=>
    axios.get("https://api.covid19api.com/summary").then((response) => {
      console.log(response);
    });
  }, []);

  
  return (
    <div>
      <Title>World Statistic</Title>
      <div>
        <li>New confirmed </li> {props.world.newConfirmed}
      </div>
      <li>New death</li>
      <li>Total confirmed</li>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    world: state.world,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  
  return {};
};

export default  connect(mapStateToProps, mapDispatchToProps)(World);


