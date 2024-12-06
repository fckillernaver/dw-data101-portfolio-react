import React, { useState } from "react";
import "./home.css";

import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoFirebase,
  IoLogoJavascript,
} from "react-icons/io5";
import StackItem from "./StackItem";
import { Link } from "react-router-dom";
const Home = () => {
  const [stacks] = useState([
    { name: "HTML", Icon: IoLogoHtml5 },
    { name: "CSS", Icon: IoLogoCss3 },
    { name: "JavaScript", Icon: IoLogoJavascript },
    { name: "React", Icon: IoLogoReact },
    { name: "firebase", Icon: IoLogoFirebase },
  ]);
  return (
    <div>
      <h1>DW-data101 portfolio site</h1>
      <ul className="stack">
        {stacks.map((item, i) => (
          <StackItem {...item} key={i} />
        ))}
      </ul>
      <ul>
        <li>
          <Link to={"srs"}>요구사항 명세서 프로젝트</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
