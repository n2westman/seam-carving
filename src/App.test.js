import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Seam Carving link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Seam Carving/i);
  expect(linkElement).toBeInTheDocument();
});
