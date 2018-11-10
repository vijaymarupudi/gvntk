import React from 'react';
import Home from "./Home";
import { Route } from "react-router-dom";
import About from './About'
import NewUser from './NewUser'

function Index () {
  return <div>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/new_user" component={NewUser} />
  </div>
}

export default Index
