import React, { useEffect } from "react";
import "./MultiplicationsGameResults.scss";

const MultiplicationsGameResults: React.FC<{ times: any }> = ({ times }) => {
  useEffect(() => {}, [times]);

  return (
    <div className="MultiplicationsGameResults">
      <div>
        <p>
          {`Average time : ${(
            times.reduce((a: number, b: number) => a + b, 0) / times.length
          ).toFixed(2)}s`}
        </p>
      </div>
    </div>
  );
};

export default MultiplicationsGameResults;
