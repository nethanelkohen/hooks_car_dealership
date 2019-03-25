import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import DisplayData from "./DisplayData";
import FilterButton from "./FilterButton";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterByChoice = arg => dispatch({ type: arg });

  return (
    <div style={{ textAlign: "center" }}>
      <FilterButton filterByChoice={filterByChoice} props={state} />
      <DisplayData props={state} />
    </div>
  );
}
