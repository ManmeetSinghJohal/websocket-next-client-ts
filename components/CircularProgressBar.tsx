import React from "react";
import Circle from "./Circle";

const CircularProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="skill">
      <div className="outer">
        <div className="inner">
          <div id="number">{(progress * 100).toFixed(0)}%</div>
        </div>
      </div>
      <Circle progress={progress} />
    </div>
  );
};

export default CircularProgressBar;
