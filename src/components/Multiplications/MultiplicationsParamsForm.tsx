import React, { useContext, useEffect } from "react";
import { MultiplicationsContext } from "../../contexts/MultiplicationsContext";

const MultiplicationsParamsForm: React.FC<{
  handleConfirm: any;
}> = ({ handleConfirm }) => {
  const { state, dispatch } = useContext(MultiplicationsContext);

  const sendParams = () => {
    handleConfirm();
  };

  const handleChange = (event: any) => {
    dispatch({ key: event.target.name, value: Number(event.target.value) });
  };

  useEffect(() => {
    localStorage.setItem("multState", JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <p>Max number to mutiply ({state.maxNumberToMultiply})</p>
        <input
          style={{ width: "100%" }}
          value={state.maxNumberToMultiply}
          onChange={handleChange}
          type="range"
          id="max-number"
          name="maxNumberToMultiply"
          max={9}
          min={2}
        />
      </div>

      <div>
        <p>{state.quantity} exercises</p>
        <input
          style={{ width: "100%" }}
          type="range"
          id="volume"
          value={state.quantity}
          onChange={handleChange}
          name="quantity"
          min="5"
          step="5"
          max="100"
        />
      </div>

      <div>
        <p>{state.maxTimer}s to solve a problem</p>
        <input
          style={{ width: "100%" }}
          type="range"
          id="volume"
          value={state.maxTimer}
          onChange={handleChange}
          name="maxTimer"
          min="5"
          step="5"
          max="30"
        />
      </div>

      <div>
        <button onClick={sendParams} className="button-root button-success">
          OK
        </button>
      </div>
    </div>
  );
};

export default MultiplicationsParamsForm;
