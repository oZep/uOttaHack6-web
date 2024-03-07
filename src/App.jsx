/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import Home from "./Components/Home";
import Mask from "./Components/Mask";
import Frame from "./Components/Frame";
import Theme from "./Components/Theme";
import Content from "./Components/Content";

import "./styles.css";

const App = () => {
  return (
    <>
      <Mask />
      <Frame />
      <Theme />
      <Home />
      <Content />
    </>
  );
};

export default App;
