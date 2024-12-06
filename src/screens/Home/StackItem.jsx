import React from "react";

const StackItem = ({ Icon, name }) => {
  return (
    <li>
      <Icon />
      {name}
    </li>
  );
};

export default StackItem;
