import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import sum from "./sum.js";

console.log(sum(2, 5));
const title = "React with Webpack and Babel!";

ReactDOM.render(<App title={title} />, document.getElementById("app"));

module.hot.accept();
