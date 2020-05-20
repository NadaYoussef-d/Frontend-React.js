import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import AboutPrd from "./aboutPrd";
import AboutUsers from "./aboutUsers";

const About = props => {
  console.log("hello from github");
  return (
    <div>
      <h1>About {props.name}</h1>
      <div className="row">
        <div className="col-3">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/about/aboutPrd">About Products</Link>
            </li>
            <li className="list-group-item">
              <Link to="/about/aboutUsers">About Users</Link>
            </li>
          </ul>
        </div>
        <div className="col-9">
          <Switch>
            <Route path="/about/aboutPrd" component={AboutPrd} />
            <Route path="/about/aboutUsers" component={AboutUsers} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default About;
