import React, { useEffect, useState } from "react";
import SRSHeader from "./SRSHeader";
import SRSFooter from "./SRSFooter";
import { Outlet } from "react-router-dom";
import { auth } from "../../firebase";
import "./SRSLayout.css";

const SRSLayout = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const sub = auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      } else {
        console.log("no user");
      }
    });

    return () => {
      sub();
    };
  }, []);

  return (
    <>
      <SRSHeader />
      <main id="main">
        <Outlet />
      </main>
      <SRSFooter />
    </>
  );
};

export default SRSLayout;
