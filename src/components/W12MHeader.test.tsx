import { render, screen } from "@testing-library/react";
import W12MHeader from "./W12MHeader";

test("renders header text", () => {
  // Arrange
  render(<W12MHeader />);
  // Act
  const someHeaderText = screen.getByText(
    /Each species may only submit ONE W-12-M form./i
  );
  // Assert
  expect(someHeaderText).toBeInTheDocument();
});
