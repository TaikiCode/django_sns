import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // scroll が高さを超えているとき trueになるstate
  const [isHeightOver, setIsHeightOver] = useState(false);

  useEffect(() => {
    const scrollAction = () => {
      if (150 > window.scrollY) {
        setIsHeightOver(true);
      } else {
        setIsHeightOver(false);
      }
    };
    window.addEventListener("scroll", scrollAction, {
      capture: false,
      passive: true,
    });
    scrollAction(); // 初期描画時に一度だけ判定する
    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, []);

  return (
    <nav
      className={
        isHeightOver
          ? "navbar navbar-expand-lg navbar-light fixed-top"
          : "navbar navbar-expand-lg navbar-light fixed-top active"
      }
    >
      <div className={isHeightOver ? "container my-4" : "container my-2"}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link
                smooth={true}
                to="home"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                offset={-100}
                className="nav-link"
                href="#"
              >
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="experience"
                offset={-77}
                className="nav-link"
                href="#"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="skills"
                offset={-75}
                className="nav-link"
                href="#"
              >
                My Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="portfolio"
                offset={-75}
                className="nav-link"
                href="#"
              >
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contacts"
                offset={-75}
                className="nav-link"
                href="#"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
