import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

const Form = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChanges = (event) => {
    setSearchTerm(event.target.value);
  };

  const submitHandle = (event) => {
    console.log(props);
    event.preventDefault();
    props.setUrl(
      `https://new-calendar-be.herokuapp.com/api/v1/days/?seasonIn=${searchTerm}`
    );
  };

  const renderLoader = () => {
    return (
      <>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={30000} //3 secs
        />
      </>
    );
  };

  return (
    <div>
      <h2>Search for Winter, Spring, Summer, Autumn, or Fall!</h2>
      <form onSubmit={submitHandle}>
        <input
          name="search"
          type="text"
          onChange={handleChanges}
          value={searchTerm}
          placeholder="enter 1 of 5 seasons"
        />
        <button>{props.isLoading ? renderLoader() : "search"}</button>
      </form>
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

export default connect(mapStateToProps, {})(Form);
