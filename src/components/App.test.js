import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
//import { act } from "react-dom/test-utils";

import Header from './Header';
import Footer from './Footer';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders header", () => {
  render(<Header />, container);
  expect(container.textContent).toBe("#todo");
});

it("renders footer", () => {
  render(<Footer />, container);
  expect(container.textContent).toBe("created by eggwaffle - devChallenges.io");
});
