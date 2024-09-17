import { screen } from "@testing-library/react";
import { renderWithProviders } from "utils/testUtils";
import App from "./App";

test("renders learn react link", () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/todo list/i);
  expect(linkElement).toBeInTheDocument();
});
