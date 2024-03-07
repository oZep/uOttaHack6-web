/* eslint-disable prettier/prettier */
import React, { useState } from "react";

const Theme = () => {
    const [theme, setTheme] = useState("light");

    const handleThemeChange = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    return (
        <div className={`theme ${theme}`} id="theme">
            <div className="theme_colors">
                <div>
                    <button className="theme_btn" onClick={() => handleThemeChange("light")}>Light</button>
                </div>
                <div>
                    <button className="theme_btn" onClick={() => handleThemeChange("dark")}>Dark</button>
                </div>
            </div>
            <button onClick={() => handleThemeChange("mono")}>Mono</button>
        </div>
    );
};

export default Theme;
