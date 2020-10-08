import React from "react";

import Form from "./components/Form";
import List from "./components/List";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>New Calendar Redux App</h1>
      <Form />
      <List />
    </div>
  );
};

export default App;
