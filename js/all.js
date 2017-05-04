import React from "react";
import ReactDOM from "react-dom";

import Hello from "./components/hello";

function init() {
  const mountNode = document.getElementById("app");
  ReactDOM.render(<Hello name="karamage" />, mountNode);
}

document.addEventListener("DOMContentLoaded", init);
