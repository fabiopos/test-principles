import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App";

test("loads and displays greeting", async () => {  
  render(<App />);

  const people = await screen.findAllByRole("listitem");
  
  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("People");
  expect(people.length).toBeGreaterThan(10);  
  
});
