import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting title="Hola Mundo" />
    <Greeting title="Hola React" />
  </>
);
