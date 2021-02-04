import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Hi, I'm OKURA TAIKI.</h1>
        <Typed
          className="typed-text"
          strings={["HTML", "CSS", "JavaScript", "Python", "Django"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        {/* eslint-disable-next-line */}
        <a href="#" className="btn-main-offer">Contact me</a>
      </div>
    </div>
  );
};

export default Header;
