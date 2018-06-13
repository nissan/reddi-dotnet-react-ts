import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPageTemplate from "../components/templates/ErrorPageTemplate";
import HomePageTemplate from "../components/templates/HomePageTemplate";


const Routes = () => (
    <Switch>
      <Route exact path="/" component={HomePageTemplate} />
      <Route component={ErrorPageTemplate} />
    </Switch>
);

export default Routes;