import React from "react";
import * as rtl from "@testing-library/react";
import PlayersList from "../PlayersList";

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<PlayersList />);
});

describe("PlayerList component", () => {
  it("can debug the output", () => {
    tools.debug();
  });
});