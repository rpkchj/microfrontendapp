import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import MarketingApp from "./components/MarketingApp";
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
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
