import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import MarketingApp from "./components/MarketingApp";
import AuthApp from './components/AuthApp'
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "con", //to remove css-in-js classname conflicts if subprojects also use the same css-in-js library
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
