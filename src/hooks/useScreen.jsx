import React, { useEffect, useState } from "react";

const useScreen = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window.innerWidth);
      const getWidth = () => setWidth(window.innerWidth);
      const getHeight = () => setHeight(window.innerHeight);
      const getScroll = () => setScroll(window.scrollY);
      getWidth();
      getHeight();
      getScroll();

      window.addEventListener("resize", getWidth);
      window.addEventListener("resize", getHeight);
      window.addEventListener("scroll", getScroll);
      return () => {
        window.removeEventListener("resize", getWidth);
        window.removeEventListener("resize", getHeight);
        window.removeEventListener("scroll", getScroll);
      };
    }
  }, []);
  return {
    width,
    height,
    scroll,
  };
};

export default useScreen;
