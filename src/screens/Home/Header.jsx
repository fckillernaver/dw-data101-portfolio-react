import React, { useMemo } from "react";
import Navbar from "./Navbar";
import "./Header.css";
import { useScreen } from "../../hooks";

const Header = ({ items }) => {
  const { scroll } = useScreen();

  return (
    <>
      <header className={scroll >= 100 ? "home scrolled" : "home"}>
        <div>
          <div className="animation sec1">
            <button className="logo">LOGO</button>
          </div>
          <ul>
            {items.map((item, i) => (
              <li key={i} className={`animation delay${i + 1}`}>
                <a href={`#${item.id}`}>
                  <span>0{i + 1}. </span>
                  {item.id}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
