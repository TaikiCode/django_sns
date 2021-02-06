import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="skills-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5 m-0">My Skills</h1>
        <div className="skills-content mb-4 pb-5">
          <div className="column">
            <div className="bars">
              <div className="info">
                <p>HTML,CSS</p>
                <p>80%</p>
              </div>
              <div className="line htmlcss"></div>
            </div>
            <div className="bars">
              <div className="info">
                <p>JavaScript</p>
                <p>70%</p>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <p>React</p>
                <p>75%</p>
              </div>
              <div className="line react"></div>
            </div>
            <div className="bars">
              <div className="info">
                <p>Python</p>
                <p>90%</p>
              </div>
              <div className="line python"></div>
            </div>
            <div className="bars">
              <div className="info">
                <p>Django</p>
                <p>80%</p>
              </div>
              <div className="line django"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
