import React, { useState } from "react";

import Form from "./components/Form";
import List from "./components/List";

import { connect } from "react-redux";
import { fetchDays } from "./actions";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

const App = () => {
  const [url, setUrl] = useState(
    "https://new-calendar-be.herokuapp.com/api/v1/days"
  );
  return (
    <div className="App">
      <h1>New Calendar Redux App</h1>
      <Form url={url} setUrl={setUrl} />
      <List url={url} setUrl={setUrl} />
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

export default connect(mapStateToProps, { fetchDays })(App);
