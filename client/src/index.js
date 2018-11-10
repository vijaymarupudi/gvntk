import React from "react";
import ReactDOM from "react-dom";
import Index from "./pages/Index";
import { HashRouter } from "react-router-dom";
import "bulma"

ReactDOM.render(
  <HashRouter>
    <Index />
  </HashRouter>,
  document.getElementById("root")
);
