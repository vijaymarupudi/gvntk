import React from "react";
import ReactDOM from "react-dom";
import Index from "./pages/Index";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <Index />
  </HashRouter>,
  document.getElementById("root")
);
