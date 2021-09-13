import React, { useEffect, useRef, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";
import NumPad from "../NumPad/NumPad";
import { generateTableProblems } from "../utils/generators";
import "./Tables.scss";

const Tables: React.FC<{ show: boolean; exit: any; tableNumber: number }> = ({
  show,
  exit,
  tableNumber,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [userInput, setUserInput] = useState<number | null>(null);
  const [currentProblem, setCurrentProblem] = useState(0);
  const [problems, setProblems] = useState<any>([]);

  useEffect(() => {
    if (show) {
      setCurrentProblem(0);
      setProblems(generateTableProblems(tableNumber));
    }
  }, [show, tableNumber]);

  useEffect(() => {
    setUserInput(null);
  }, [currentProblem]);

  useEffect(() => {
    if (userInput === problems[currentProblem]?.solution) {
      const newIndex = currentProblem + 1;
      setUserInput(null);
      setCurrentProblem(newIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput]);

  return (
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      nodeRef={nodeRef}
    >
      <div className="Tables" ref={nodeRef}>
        <div>
          <button className="button-root close-button" onClick={exit}>
            <IoArrowBackOutline />
          </button>
        </div>

        {problems[currentProblem] ? (
          <>
            <div className="ProblemWindow">
              <span>{problems[currentProblem]?.display}</span>
            </div>

            <div style={{ marginTop: "auto" }}>
              <NumPad
                setCurrentNumber={setUserInput}
                currentNumber={userInput}
              />
            </div>
          </>
        ) : (
          <>
            <p>END</p>
          </>
        )}
      </div>
    </CSSTransition>
  );
};

export default Tables;
