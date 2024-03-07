import React from 'react';

const Home = () => {
  return (
    <header className="siteHeader" id="SiteHeader">
      <h1 className="siteHeader_title">Joey Issa</h1>
      <p className="siteHeader_label">Software Developer</p>
      <nav className="siteHeader_nav">
        <ol>
          <li className="{ 'is-selected': $store.app.currentPath === '/' } is-selected">
            <div className="_dot">●</div>
            <a className="_text" href="/">
              Home
            </a>
          </li>
          <li className="{ 'is-selected': $store.app.currentPath === '/projects/' }">
            <div className="_dot">●</div>
            <a className="_text" href="/projects/">
              Projects
            </a>
          </li>
          <li className="{ 'is-selected': $store.app.currentPath === '/info/' }">
            <div className="_dot">●</div>
            <a className="_text" href="/info/">
              Info
            </a>
          </li>
          <li className="{ 'is-selected': $store.app.currentPath === '/contact/' }">
            <div className="_dot">●</div>
            <a className="_text" href="/contact/">
              Contact
            </a>
          </li>
          <li className="{ 'is-selected': $store.app.currentPath === '/faq/' }">
            <div className="_dot">●</div>
            <a className="_text" href="/faq/">
              FAQ
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Home;
