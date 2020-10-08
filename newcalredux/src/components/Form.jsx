import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

const Form = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChanges = (event) => {
    setSearchTerm(event.target.value);
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
      <h2>this is the form</h2>
      <form>
        <input
          onChange={handleChanges}
          value={searchTerm}
          placeholder="placeholder"
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
