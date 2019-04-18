import React from "react";

const Calculator = props => {
  const { width, height, color, text } = props;
  onclick=()=>{
    console.log('hi')
  }
  return (
    <div
      style={{
        width: width || 100,
        height: height || 100,
        backgroundColor: color || "blue"
      }}
    >
      {text}
      <h1 onClick={onclick}>click</h1>
    </div>
  );
};

export default Calculator;