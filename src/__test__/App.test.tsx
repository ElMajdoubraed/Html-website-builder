import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter, Route, Routes } from "react-router";
import Home from "../pages/home";
import Preview from "../pages/preview";

import App from "../App";

it("should throw an error when Routes component is not imported", () => {
  expect(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <BrowserRouter>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
        </BrowserRouter>
      </MemoryRouter>
    );
  }).toThrow();
});

it("should render nothing when path is not defined", () => {
  <MemoryRouter initialEntries={["/undefined"]}>
    <App />
  </MemoryRouter>;
  expect(screen.queryByRole("main")).not.toBeInTheDocument();
});
