import React from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Work from "./components/Work";
import MenuLayout from "./components/MenuLayout";
import Contact from "./components/Contact";
import { Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <MenuLayout/>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/Profile" component={Profile}/>
      <Route path="/Work" component={Work}/>
      <Route path="/Contact" component={Contact}/>
    </div>
  );
};

export default App;
