import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Header from './components/header.component'
// import MovieBody from './components/movies.components'
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
