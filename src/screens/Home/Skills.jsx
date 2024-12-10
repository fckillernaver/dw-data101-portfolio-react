import React, { useState } from "react";
import "./Skills.css";
import {
  IoLogoCss3,
  IoLogoFirebase,
  IoLogoHtml5,
  IoLogoJavascript,
} from "react-icons/io5";

const Skills = ({ index, id }) => {
  const stacks = [
    {
      section: "Language",
      items: [
        {
          name: "HTML",
          Icon: IoLogoHtml5,
          desc: "HTML 은 껌입니다.",
        },
        { name: "CSS", Icon: IoLogoCss3, desc: "CSS 는 조금 재밌는 수준이죠." },
        {
          name: "JavaScript",
          Icon: IoLogoJavascript,
          desc: "JavaScript 야 말로 진정한 프로그래밍 언어가 아닐까 합니다.",
        },
      ],
    },
    {
      section: "Database",
      items: [
        {
          name: "firebase",
          Icon: IoLogoFirebase,
          desc: "Firebase 를 만나고나서 프론트엔드가 세상을 잡을 수도 있겠다는 생각을 했습니다.",
        },
      ],
    },
  ];

  const [current, setCurrent] = useState(stacks[0].section);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="skills">
      <ul className="stacks">
        {stacks.map(({ section }, i) => (
          <li key={i} className={`stack ${i > 0 ? "noMg" : undefined}`}>
            <button
              className={section === current ? "selected" : undefined}
              onClick={() => {
                setCurrent(section);
                setCurrentIndex(i);
              }}
            >
              {section}
            </button>
          </li>
        ))}
        <li className="span" style={{ top: 40 * currentIndex }}></li>
      </ul>
      <div className="stacks">
        <h4>
          Skill Stack<span>{`  @ ${current}`}</span>
        </h4>
        <ul className="skill">
          {stacks[currentIndex].items.map(({ Icon, name, desc }, i) => (
            <li key={i} className={`animation delay${i + 1}`}>
              <div>
                <Icon
                  className={current === "Database" ? "icon2" : `icon${i}`}
                />
              </div>
              <div>
                <h4>{name}</h4>
                <p>
                  {desc}
                  {desc}
                  {desc}
                  {desc}
                  {desc}
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
