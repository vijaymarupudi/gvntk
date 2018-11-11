import React from "react";
import Home from "./Home";
import { Route } from "react-router-dom";
import About from "./About";
import NewUser from "./NewUser";
import NewItem from "./NewItem";
import LoginPage from "../pages/LoginPage";

function Index() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/new_user" component={NewUser} />
      <Route path="/new_item" component={NewItem} />
      <Route path="/login" component={LoginPage} />
    </div>
  );
}

export default Index;
