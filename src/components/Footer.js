import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="text-center">
          <h5 className="text-uppercase">Follow me</h5>
          <div className="d-flex justify-content-center my-4">
            <a className="footer-icon" href="https://twitter.com/koko29412141">
              <FaTwitter />
            </a>
            <a className="footer-icon" href="https://github.com/TaikiCode">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="copyrights text-center">
          <p className="mt-1">
            Copyright&copy;
            {new Date().getFullYear()}&nbsp;TAIKI | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
