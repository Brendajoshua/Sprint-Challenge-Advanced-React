import React from "react";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import PlayerCard from "../PlayerCard";

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(
    <PlayerCard key="1" name="Brenda" country="Kenya" searches="6" />
  );
});

describe("PlayerCard component", () => {
  it("can debug the output", () => {
    tools.debug();
  });

  it("shows the correct player name", () => {
    const elementWithJoshText = tools.queryByText(/Brenda/i);
    expect(elementWithJoshText).toBeInTheDocument();
  });

  it("shows the correct player country", () => {
    const elementWithJoshText = tools.queryByText(/Kenya/i);
    expect(elementWithJoshText).toBeInTheDocument();
  });

  it("shows the correct player searches", () => {
    const elementWithJoshText = tools.queryByText(/6/i);
    expect(elementWithJoshText).toBeInTheDocument();
  });
});