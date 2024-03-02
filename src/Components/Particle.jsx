// ParticleComponent.js
import React, { useEffect } from "react";
import particlesJS from "particles.js";
import particlesConfig from "./assets/particles.json";

const ParticleComponent = () => {
  useEffect(() => {
    particlesJS("particles-js", particlesConfig, function () {
      console.log("callback - particles.js config loaded");
    });
  }, []);

  return <div id="particles-js" />;
};

export default ParticleComponent;
