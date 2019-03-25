import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import DisplayData from "./DisplayData";
import FilterButton from "./FilterButton";
import Context from "./Context";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterByChoice = (arg, color = undefined) => {
    return dispatch({ type: arg, color });
  };

  const showActive = arg => {
    return state && state.option.includes(arg) ? true : false;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Context.Provider value={{ filterByChoice, showActive, state }}>
        <FilterButton />
        <DisplayData />
      </Context.Provider>
    </div>
  );
}
