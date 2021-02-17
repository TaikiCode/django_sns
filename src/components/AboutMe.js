import React from "react";
import me from "../me.png";


const AboutMe = () => {
  return (
    <div id="about" className="container mt-4">
      <div className="row">
        <div className="col-lg-5 col-xm-12">
          <div className="photo-wrap mb-4">
            <img src={me} alt="author..." className="profile-img" />
          </div>
        </div>
        <div className="bio col-lg-7 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p className="about-me font-italic">
            フリーランスエンジニアを目指して、プログラミング勉強中の大学生。
            フロントエンドはReact、バックエンドはDjangoがまあまあ得意です。
            最近は、Web系以外にも人工知能やデータサイエンスの分野も勉強してます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
