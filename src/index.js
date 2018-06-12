import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { injectGlobal } from "styled-components";

ReactDOM.render(<App />, document.getElementById("root"));

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
    font-size: 16px;
  }
`;
