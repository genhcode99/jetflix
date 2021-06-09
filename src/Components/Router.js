import React from "react";
import {HashRouter, Route} from "react-router-dom"
import Home from "../Routes/Home"
import TV from "../Routes/TV"
import Search from "../Routes/Search"


const Router = () => {
  return (
    <HashRouter>
      <>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
      </>
    </HashRouter>
  );
};

export default Router;