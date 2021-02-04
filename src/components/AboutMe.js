import React from "react";
import avatar from "../avatar.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5 mt-4">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img src={avatar} alt="author..." className="profile-img" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            voluptas adipisci quod? Ipsum sapiente ex fuga quo perferendis
            deserunt laboriosam vel blanditiis, odio quia est eos, hic sunt ad
            iusto? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ullam corporis totam at veritatis blanditiis saepe placeat illum,
            sit, accusantium veniam consequuntur accusamus? Architecto maxime
            animi, ut praesentium quod quos harum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
