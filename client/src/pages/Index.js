import React from "react";
import Home from "./Home";
import { Route } from "react-router-dom";
import About from "./About";
import NewUser from "./NewUser";
import NewItem from "./NewItem";
import LoginPage from "../pages/LoginPage";
import List from "../pages/List";

function Index() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/new_user" component={NewUser} />
      <Route path="/new_item" component={NewItem} />
      <Route path="/login" component={LoginPage} />
      <Route path="/list" component={List} />
    </div>
  );
}

export default Index;
