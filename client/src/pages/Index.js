import React from 'react';
import App from "../App";
import { Route } from "react-router-dom";
import About from './About'

function Index () {
  return <div>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
  </div>
}

export default Index
