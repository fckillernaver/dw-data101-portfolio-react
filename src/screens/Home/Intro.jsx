import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="animation delay6 intro">
      <h3>안녕하세요, Front-end Developer</h3>
      <h1 className="main">Dexter Yoon 입니다.</h1>
      <h1>
        Sapiente illum, necessitatibus ullam dolorem unde voluptas error
        distinctio corrupti!
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        asperiores delectus quo dicta eos voluptatem amet numquam! Officiis rem
        earum voluptatum dolor accusantium, qui atque optio ipsum sapiente
        beatae provident.
      </p>
      <ul>
        <li>
          <button className="icon s40">
            <IoLogoGithub />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Intro;
