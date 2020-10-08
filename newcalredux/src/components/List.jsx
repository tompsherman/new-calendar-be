import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fetchDays } from "../actions";

import Card from "./Card";

const List = (props) => {
  useEffect(() => {
    props.fetchDays();
  }, []);

  return (
    <div>
      <h2>this is the List</h2>
      {props.days.map((item) => (
        <Card key={item.id} day={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    days: state.days,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchDays })(List);
