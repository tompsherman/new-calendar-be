import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Label, Input } from "reactstrap";

const CalForm = (props) => {
  const [season, setseason] = useState("");
  const [month, setMonth] = useState("")

  const handleSeasonChanges = (event) => {
    setseason(event.target.value);
    props.setUrl(
      `https://new-calendar-be.herokuapp.com/api/v1/days/?seasonIn=${season}`
    );
  };

  const handleMonthChanges = (event) => {
    setMonth(event.target.value);
    props.setUrl(
      `https://new-calendar-be.herokuapp.com/api/v1/days/?seasonIn=${season}&monthIn=${month}`
    )
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
      {/* <input
          name="search"
          type="text"
          onChange={handleChanges}
          value={season}
          placeholder="enter 1 of 5 seasons"
        /> */}
      <form>
      <Label check>
          <Input type="radio" name="month" value="early" onClick={handleMonthChanges} /> Early
        </Label>
        <Label check>
          <Input type="radio" name="month" value="mid" onAuxClick={handleMonthChanges} /> Mid-
        </Label>
        <Label check>
          <Input type="radio" name="month" value="late" onClick={handleMonthChanges}/> Late
        </Label>
        {/* <button>{props.isLoading ? renderLoader() : "get month"}</button> */}
      </form>

      <form >
        <Label check>
          <Input type="radio" name="season" value="winter" onClick={handleSeasonChanges} /> Winter
        </Label>
        <Label check>
          <Input type="radio" name="season" value="spring" onClick={handleSeasonChanges} /> Spring
        </Label>
        <Label check>
          <Input type="radio" name="season" value="summer" onClick={handleSeasonChanges}/> Summer
        </Label>
        <Label check>
          <Input type="radio" name="season" value="autumn" onClick={handleSeasonChanges}/> Autumn
        </Label>
        <Label check>
          <Input type="radio" name="season" value="fall" onClick={handleSeasonChanges}/> Fall
        </Label>

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

export default connect(mapStateToProps, {})(CalForm);
