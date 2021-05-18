import React from "react";

const OptionsList = ({ options }: { options: Array<string> }) => {
  const list = [];
  console.log("OL", { options });

  if (options) {
    for (let index = 0; index < options.length; index++) {
      list.push(<li key={options[index]}>{options[index]}</li>);
    }
  }

  return <ul>{list}</ul>;
};

export default OptionsList;
