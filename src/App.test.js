import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import DisplayData from "./DisplayData";
import FilterButton from "./FilterButton";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";

configure({ adapter: new Adapter() });

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("wraps App", () => {
  wrapped;
});

it("renders wrapped DisplayData component", () => {
  expect(wrapped.find(DisplayData).length).toEqual(1);
});

it("renders wrapped FilterButton component", () => {
  expect(wrapped.find(FilterButton).length).toEqual(1);
});

it("renders App component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders DisplayData component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DisplayData />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders FilterButton component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FilterButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
