import React, { useEffect, useMemo, useRef } from "react";
import { useScreen } from "../../hooks";

const Container = ({ children, id, clientHeight, index }) => {
  const { scroll, height } = useScreen();

  // const [className, setClassName] = useState(initialState)

  const className = useMemo(() => {
    const initialState = "snap content minHeight section";
    const triggerPoint = (height - 100) / 2;
    const trigger = scroll >= triggerPoint + height * (index - 1);
    if (trigger) {
      return `${initialState} animation emerge delay1 op`;
    }
    return `${initialState} op0`;
  }, [clientHeight, scroll, height, index]);

  useEffect(() => {
    console.log(className);
  }, [className]);

  return (
    <div id={id} className={className}>
      <div>
        <p className="title">
          <span>0{index}.</span> {id}
        </p>
        <div className="bar" />
      </div>
      {children}
    </div>
  );
};

export default Container;
