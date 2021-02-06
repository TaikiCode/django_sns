import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Hi, I'm OKURA TAIKI.</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "Student"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contacts" offset={-72} className="btn-main">
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
