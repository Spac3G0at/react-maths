import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsBackspace } from "react-icons/bs";
import "./NumPad.scss";

const padSets = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const NumPad: React.FC<{
  setCurrentNumber: any;
  currentNumber: number | null;
}> = ({ currentNumber, setCurrentNumber }) => {
  const selectNumber = (num: number) => {
    const newNum = Number((currentNumber ? currentNumber : 0) + num.toString());
    setCurrentNumber(newNum);
  };

  const undo = () => {
    const newNum = currentNumber ? currentNumber.toString() : "0";
    Number(newNum) > 9
      ? setCurrentNumber(Number(newNum.slice(0, newNum.length - 1)))
      : setCurrentNumber(null);
  };

  return (
    <div className="NumPad">
      <div>
        <div className="user-input">
          {currentNumber !== null && currentNumber >= 0 ? currentNumber : "-"}
        </div>
        <div>
          {padSets.map((arr, i) => {
            return (
              <div className="row" key={i}>
                {arr.map((num, j) => (
                  <button
                    key={j}
                    className="pad-button neumorphic"
                    onClick={() => selectNumber(num)}
                  >
                    <h1>{num}</h1>
                  </button>
                ))}
              </div>
            );
          })}
          <div className="row">
            <button
              className="pad-button neumorphic"
              onClick={() => setCurrentNumber(null)}
            >
              <h1>
                <AiOutlineCloseCircle />
              </h1>
            </button>
            <button
              className="pad-button neumorphic"
              onClick={() => selectNumber(0)}
            >
              <h1>{0}</h1>
            </button>
            <button className="pad-button neumorphic" onClick={undo}>
              <h1>
                <BsBackspace />
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumPad;
