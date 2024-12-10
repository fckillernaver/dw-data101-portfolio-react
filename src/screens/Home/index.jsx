import React, { useCallback, useEffect, useRef, useState } from "react";
import "./home.css";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Container from "./Container";
import { useScreen } from "../../hooks";
const Home = () => {
  const items = [
    { id: "Intro", Component: Intro },
    { id: "About", Component: About },
    { id: "Skills", Component: Skills },
    { id: "Projects", Component: Projects },
    { id: "Contact", Component: Contact },
  ];

  const mainRef = useRef();

  const [clientHeight, setClientHeight] = useState(0);
  useEffect(() => {
    setClientHeight(mainRef.current?.clientHeight ?? 0);
  }, []);

  return (
    <>
      <Header items={items} />
      <main id="root" ref={mainRef}>
        <div className="snap container">
          {items.map(({ Component, id }, i) => (
            <Container id={id} key={i} clientHeight={clientHeight} index={i}>
              <Component id={id} index={i} />
            </Container>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
