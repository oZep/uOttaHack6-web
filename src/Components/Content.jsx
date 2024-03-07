import React from "react";
import Home from "./Home";
import Projects from "./Projects";

const Content = () => {
  return (
    <main className="content" id="content" data-scroll="area">
      <div className="content_inner" data-scroll="target">
        <Home />
        <Projects />
      </div>
    </main>
  );
};

export default Content;
