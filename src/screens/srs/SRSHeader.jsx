import React, { useEffect } from "react";
import "./SRSHeader.css";
import { useScreen } from "../../hooks";

const SRSHeader = ({ user }) => {
  const { height, scroll, width } = useScreen();
  useEffect(() => {
    console.log(user);
    console.log({ height, scroll, width });
  }, [user, height, scroll, width]);

  return (
    <>
      <header className={scroll >= 100 ? "scrolled" : undefined}>
        <button className="title">SRS</button>
        <ul>
          <li>
            <button>새 프로젝트</button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default SRSHeader;
