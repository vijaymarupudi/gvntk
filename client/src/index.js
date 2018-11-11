import React from "react";
import ReactDOM from "react-dom";
import Index from "./pages/Index";
import { HashRouter } from "react-router-dom";
import "bulma"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

ReactDOM.render(
  <HashRouter>
    <Index />
  </HashRouter>,
  document.getElementById("root")
);
