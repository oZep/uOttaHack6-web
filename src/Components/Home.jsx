import { useStore } from "react-admin";
import React from 'react';

const Home = () => {
  const $store = useStore(); // Define the $store variable using the imported store module
  const currentPath = $store?.app?.currentPath; // Safely access currentPath property

  return (
    <header className="siteHeader" id="SiteHeader">
      <h1 className="siteHeader_title">Joey Issa</h1>
      <p className="siteHeader_label">Software Developer</p>
      <nav className="siteHeader_nav">
        <ol>
          <li className={`${currentPath === "/" ? "is-selected" : ""}`}>
            { currentPath === "/" ? <div className="_dot">●</div> : null }
            <a className="_text" href="/">Home</a>
          </li>
          <li className={`${currentPath === "/projects/" ? "is-selected" : ""}`}>
            { currentPath === "/projects/" ? <div className="_dot">●</div> : null }
            <a className="_text" href="/projects/">Projects</a>
          </li>
          <li className={`${currentPath === "/info/" ? "is-selected" : ""}`}>
            { currentPath === "/info/" ? <div className="_dot">●</div> : null }
            <a className="_text" href="/info/">Info</a>
          </li>
          <li className={`${currentPath === "/contact/" ? "is-selected" : ""}`}>
            { currentPath === "/contact/" ? <div className="_dot">●</div> : null }
            <a className="_text" href="/contact/">Contact</a>
          </li>
          <li className={`${currentPath === "/faq/" ? "is-selected" : ""}`}>
            { currentPath === "/faq/" ? <div className="_dot">●</div> : null }
            <a className="_text" href="/faq/">FAQ</a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Home;
