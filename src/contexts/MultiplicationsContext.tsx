import React, { createContext, useReducer } from "react";

const MultiplicationsContext = createContext<any>(null);

export { MultiplicationsContext };

const reducer = (state: any, { key, value }: any) => {
  return {
    ...state,
    [key]: value,
  };
};

const MultContext = ({ children }: any) => {
  const multStr = localStorage.getItem("multState");
  const multState = multStr
    ? JSON.parse(multStr)
    : {
        quantity: 10,
        maxNumberToMultiply: 9,
        maxTimer: 15,
      };

  const [state, dispatch] = useReducer(reducer, multState);

  const value = {
    state,
    dispatch,
  };

  return (
    <MultiplicationsContext.Provider value={value}>
      {children}
    </MultiplicationsContext.Provider>
  );
};

export default MultContext;
