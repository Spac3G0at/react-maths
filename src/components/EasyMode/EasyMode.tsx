import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { generateSuggestions, getRandomInt } from "../utils/generators";
import "./EasyMode.scss";

const EasyMode: React.FC<{
  problem: any;
  setCurrentNumber: any;
  allProblems: any;
}> = ({ problem, setCurrentNumber, allProblems }) => {
  const [suggestions, setSuggestions] = useState<any>([]);

  useEffect(() => {
    const suggests = generateSuggestions(problem, allProblems);
    setSuggestions(suggests);
  }, [problem]);

  return (
    <div className="EasyMode">
      <div className="grid">
        {suggestions.map((el: number) => (
          <div
            key={getRandomInt(
              (el + getRandomInt(1234567890)) * getRandomInt(1234567890)
            )}
            className="grid-item"
          >
            <button
              className="button-root pad-button"
              onClick={() => setCurrentNumber(el)}
            >
              {el}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EasyMode;
