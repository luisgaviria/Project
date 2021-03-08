import React from "react";
import ReactDOM from "react-dom";
import data from "./components/data"
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <App data={data}/>
  </>,
  rootElement
);
