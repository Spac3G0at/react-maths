import React, { useLayoutEffect, useRef } from "react";
import "./ProgressTimer.scss";

const ProgressTimer: React.FC<{
  maxTime: number;
  currentProblem: number;
  onTimeout: any;
  sendTime?: any;
}> = ({ maxTime, currentProblem, onTimeout, sendTime }) => {
  const progressRef = useRef<HTMLDivElement>(null);

  const secondsFromPercentage = (elem: any): any => {
    var pa = elem.offsetParent || elem;
    const seconds = Number(
      ((elem.offsetWidth / pa.offsetWidth) * 100 * maxTime) / 100
    );
    return seconds;
  };

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
      progress.addEventListener("animationend", animationendCallback);
      progress.style.animationDuration = `${maxTime}s`;
      progress.style.animationPlayState = "running";
      resetTimer();
    }

    return () => {
      if (progress) sendTime(secondsFromPercentage(progress));
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
