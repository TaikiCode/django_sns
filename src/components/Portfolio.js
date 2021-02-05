import React from "react";
import todo from "../todo-app.png";
import ec from "../ec.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import "react-popupbox/dist/react-popupbox.css";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";

const Portfolio = () => {
  // test01
  const openPopupboxTest1 = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={todo} alt="test01..." />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ab
          placeat molestias exercitationem nesciunt dolor fuga quas impedit,
        </p>
        <b>GitHub:</b>
        {/* eslint-disable-next-line */}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/TaikiCode/react_todo")}
        >
          https://github.com/TaikiCode/react_todo
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigText1 = {
    titleBar: {
      enable: true,
      text: "Todo app project...",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // test02
  const openPopupboxTest2 = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={ec}
          alt="ec website..."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ab
          placeat molestias exercitationem nesciunt dolor fuga quas impedit,
        </p>
        <b>GitHub:</b>
        {/* eslint-disable-next-line */}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/TaikiCode/react_todo")}
        >
          https://github.com/TaikiCode/react_todo
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigText2 = {
    titleBar: {
      enable: true,
      text: "Todo app project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // test03
  const openPopupboxTest3 = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={todo}
          alt="test01..."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ab
          placeat molestias exercitationem nesciunt dolor fuga quas impedit,
        </p>
        <b>GitHub:</b>
        {/* eslint-disable-next-line */}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/TaikiCode/react_todo")}
        >
          https://github.com/TaikiCode/react_todo
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigText3 = {
    titleBar: {
      enable: true,
      text: "Todo app project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // test01
  const openPopupboxTest4 = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={ec}
          alt="test01..."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ab
          placeat molestias exercitationem nesciunt dolor fuga quas impedit,
        </p>
        <b>GitHub:</b>
        {/* eslint-disable-next-line */}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/TaikiCode/react_todo")}
        >
          https://github.com/TaikiCode/react_todo
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigText4 = {
    titleBar: {
      enable: true,
      text: "Todo app project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxTest1}>
            <img className="portfolio-image" src={todo} alt="todo app..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxTest2}>
            <img className="portfolio-image" src={ec} alt="text02..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxTest3}>
            <img
              className="portfolio-image"
              src={todo}
              alt="text03..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxTest4}>
            <img
              className="portfolio-image"
              src={ec}
              alt="text04..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>

      </div>
      <PopupboxContainer {...popupboxConfigText1} />
      <PopupboxContainer {...popupboxConfigText2} />
      <PopupboxContainer {...popupboxConfigText3} />
      <PopupboxContainer {...popupboxConfigText4} />
    </div>
  );
};

export default Portfolio;
