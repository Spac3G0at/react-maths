import React from "react";
import "./ProblemWindow.scss";

const ProblemWindow: React.FC<{ display: string }> = ({ display }) => {
  return (
    <div className="ProblemWindow">
      <span>{display}</span>
    </div>
  );
};

export default ProblemWindow;
