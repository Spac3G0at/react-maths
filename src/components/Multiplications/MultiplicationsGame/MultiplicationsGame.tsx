import React, { useContext, useEffect, useState } from "react";
import "./MultiplicationsGame.scss";
import { CSSTransition } from "react-transition-group";
import { IoArrowBackOutline } from "react-icons/io5";
import NumPad from "../../NumPad/NumPad";
import { MultiplicationsContext } from "../../../contexts/MultiplicationsContext";
import ProblemWindow from "../../ProblemWindow/ProblemWindow";

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
    setProblems(generateProblems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const generateProblems = () => {
    const allPossibles = [];
    for (let i = 2; i <= state.maxNumberToMultiply; i++) {
      for (let j = 2; j <= 9; j++) {
        allPossibles.push({
          display: `${i}x${j}`,
          solution: i * j,
        });
      }
    }

    const probs: any = [];
    for (let i = 0; i < state.quantity; i++) {
      const randomIndex = getRandomInt(allPossibles.length);
      if (allPossibles[randomIndex]) probs.push(allPossibles[randomIndex]);
      allPossibles.splice(randomIndex, 1);
    }

    return probs;
  };

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

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

        <ProblemWindow display={problems[currentProblem]?.display} />

        <div style={{ marginTop: "auto" }}>
          <NumPad setCurrentNumber={setUserInput} currentNumber={userInput} />
        </div>
      </div>
    </CSSTransition>
  );
};

export default MultiplicationsGame;
