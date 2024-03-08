import React, { useState } from "react";

const Theme = () => {
  const [selectedThemes, setSelectedThemes] = useState(["light"]);

  const handleThemeChange = (selectedTheme) => {
    if (
      (selectedThemes.includes("light") && selectedTheme === "dark") ||
      (selectedThemes.includes("dark") && selectedTheme === "light")
    ) {
      setSelectedThemes([selectedTheme]);
    } else if (
      (selectedThemes.includes("light") && selectedTheme === "mono") ||
      (selectedThemes.includes("mono") && selectedTheme === "light") ||
      (selectedThemes.includes("dark") && selectedTheme === "mono") ||
      (selectedThemes.includes("mono") && selectedTheme === "dark")
    ) {
      setSelectedThemes([...selectedThemes, selectedTheme]);
    } else {
      setSelectedThemes([selectedTheme]);
    }
  };

  return (
    <div className={`theme ${selectedThemes.join(" ")}`} id="theme">
      <div className="theme_colors">
        <div className="theme_btn">
          <label>
            <input
              type="checkbox"
              checked={selectedThemes.includes("light")}
              onChange={() => handleThemeChange("light")}
            />
            Light
          </label>
        </div>
        <div className="theme_btn">
          <label>
            <input
              type="checkbox"
              checked={selectedThemes.includes("dark")}
              onChange={() => handleThemeChange("dark")}
            />
            Dark
          </label>
        </div>
        <div className="theme_btn">
          <label>
            <input
              type="checkbox"
              checked={selectedThemes.includes("mono")}
              onChange={() => handleThemeChange("mono")}
            />
            Mono
          </label>
        </div>
      </div>
    </div>
  );
};

export default Theme;
