import React, { useLayoutEffect, useRef } from "react";
import "./ProgressTimer.scss";

const ProgressTimer: React.FC<{
  maxTime: number;
  currentProblem: number;
  onTimeout: any;
}> = ({ maxTime, currentProblem, onTimeout }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  // const [allSeconds, setAllSeconds] = useState<any>([]);

  const animationendCallback = () => {
    onTimeout(currentProblem + 1);
    // const secs = [...allSeconds];
    // secs.push(maxTime);
    // setAllSeconds(secs);
  };

  const resetTimer = () => {
    if (progressRef && progressRef.current) {
      progressRef.current.classList.remove("progress");
      setTimeout(() => {
        if (progressRef && progressRef.current)
          progressRef.current.classList.add("progress");
      }, 100);
    }
  };

  useLayoutEffect(() => {
    const progress = progressRef.current;
    if (progress) {
      resetTimer();
      progress.addEventListener("animationend", animationendCallback);
      progress.style.animationDuration = `${maxTime}s`;
      progress.style.animationPlayState = "running";
    }
    return () => {
      progress?.removeEventListener("animationend", animationendCallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressRef, currentProblem]);

  return (
    <div className="ProgressTimer">
      <div ref={progressRef} className="progress" />
    </div>
  );
};

export default ProgressTimer;
