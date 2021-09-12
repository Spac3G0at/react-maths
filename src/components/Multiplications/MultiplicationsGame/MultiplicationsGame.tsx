import React, { useContext, useEffect, useState } from "react";
import "./MultiplicationsGame.scss";
import { CSSTransition } from "react-transition-group";
import { IoArrowBackOutline } from "react-icons/io5";
import NumPad from "../../NumPad/NumPad";
import { MultiplicationsContext } from "../../../contexts/MultiplicationsContext";
import { generateProblems } from "../../utils/generators";
import "./../../ProblemWindow/ProblemWindow.scss";
import ProgressTimer from "../../ProgressTimer/ProgressTimer";

const MultiplicationsGame: React.FC<any> = (props) => {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  const [userInput, setUserInput] = useState<number | null>(null);
  const { state } = useContext(MultiplicationsContext);
  const [problems, setProblems] = useState<any>([]);
  const [currentProblem, setCurrentProblem] = useState(0);

  useEffect(() => {
    if (userInput === problems[currentProblem]?.solution) {
      const newIndex = currentProblem + 1;
      setUserInput(null);
      setCurrentProblem(newIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput]);

  useEffect(() => {
    setUserInput(null);
  }, [currentProblem]);

  useEffect(() => {
    if (props.show) {
      setUserInput(null);
      setCurrentProblem(0);
      setProblems(generateProblems(state.maxNumberToMultiply, state.quantity));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.show]);

  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className="MultiplicationsGame">
        <div>
          <button className="button-root close-button" onClick={props.exit}>
            <IoArrowBackOutline />
          </button>
        </div>

        {problems[currentProblem] ? (
          <>
            <div className="ProblemWindow">
              <ProgressTimer
                currentProblem={currentProblem}
                onTimeout={setCurrentProblem}
                maxTime={state.maxTimer}
              />
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

export default MultiplicationsGame;
