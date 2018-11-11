import Nav from "./Nav";
import React from "react";

function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
}

export default Layout;
