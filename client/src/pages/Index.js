import React from 'react';
import Home from "./Home";
import { Route } from "react-router-dom";
import About from './About'

function Index () {
  return <div>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
  </div>
}

export default Index
