import React from "react";
import "./Projects.css";
import { useScreen } from "../../hooks";
import { IoLink, IoLogoGithub } from "react-icons/io5";

const Projects = () => {
  const { width } = useScreen();
  const size = width - 60;
  return (
    <div className="projects">
      <div className="pro">
        <div className="img">
          <img src={img} alt="" style={{ width: size, height: size }} />
        </div>
        <div>
          <h6>Main Project</h6>
          <div>
            <p className="title">Project Name</p>
            <p className="dates">{new Date().toLocaleDateString()}</p>
          </div>
          <p className="desc">
            [Project Name] is Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptatibus quidem facilis voluptates
            perspiciatis unde quae veniam officia consequatur, minus amet, id
            optio mollitia hic commodi deserunt totam culpa omnis atque.
          </p>
          <ul className="lists">
            <li>React</li>
            <li>styled in Pure Css</li>
            <li>firebase</li>
          </ul>
          <ul className="icons">
            <li>
              <a href="">
                <IoLink />
              </a>
            </li>
            <li>
              <a href="">
                <IoLogoGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;

const img =
  "https://cdn.pixabay.com/photo/2017/01/18/17/52/calendar-1990453_1280.jpg";
