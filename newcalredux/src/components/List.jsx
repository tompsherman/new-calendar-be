import React, { useEffect } from "react";

import Card from "./Card";

import { connect } from "react-redux";
import { fetchDays } from "../actions";

import styled from "styled-components";

const List = (props) => {
  const { fetchDays, url } = props;

  useEffect(() => {
    fetchDays(url);
  }, [fetchDays, url]);

  return (
    <StyledDiv>
      <div className="fullPage">
        {props.days.map((day) => (
          <Card key={day._id} day={day} />
        ))}
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .fullPage {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

const mapStateToProps = (state) => {
  return {
    days: state.days,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchDays })(List);
