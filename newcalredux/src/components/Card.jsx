import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <StyledDiv>
      <div className="dayCard">
        <h2>day of year: {props.day.day}</h2>
        <h2>day of season: {props.day.nDay}</h2>
        <h2>
          {props.day.monthIn} {props.day.seasonIn}
        </h2>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .dayCard {
    width: 75%;
    border: 1px solid black;
    padding: 10%;
    margin: 1%;
  }
`;

export default Card;
